import { Inject, Injectable } from "@nestjs/common";
import { Expense } from "./class/expense.class";


@Injectable()
export class ExpenseService {

    constructor(@Inject('EXPENSE_REPOSITORY') private readonly dataSource: any) {}

    // Requete pour obtenir la liste des dépense
    /**
     * Récupération des données nécesaire à l'affichage à partir de la table depense
     * join avec la table catégorie pour obtenir le nom de la catégorie
     * join avec la table utilisateur pour obtenir la personne qui a effectué la dépense (u)
     * join avec la table participation pour faire la jointure avec la table utilisateur (u2)
     * et ainsi obtenir la liste des participants à la dépense que l'on va grouper avec un GROUP_CONCAT
     * pour obtenir une liste en un seul champ nommé participants
     * on groupe ensuite le resultat par id, libelle et montant de la dépense et par libelle de catégorie
     */
    findAll(): Promise<Expense[]> {
        return this.dataSource.query(`
            SELECT d.id, d.libelle, d.montant, c.libelle AS libelle_categorie, u.pseudo AS pseudo, GROUP_CONCAT(u2.pseudo SEPARATOR ', ') AS participants
            FROM depense d
            JOIN categorie c ON d.id_categorie = c.id
            JOIN utilisateur u ON d.id_payeur = u.id
            LEFT JOIN participation p ON d.id = p.id_depense
            JOIN utilisateur u2 on p.id_utilisateur = u2.id
            GROUP BY d.id, d.libelle, d.montant, c.libelle;
        `);
    }

    // Requete pour obtenir un dépense 
    find(id: number): Promise<Expense> {
        return this.dataSource.query('select * from depense where id = ?', [id]);
    }

    // Requete pour modifier un dépense 
    update(expense: Expense) {
        return this.dataSource.query('update depense set libelle = ?, montant = ?, id_payeur = ?, id_categorie = ? where id = ?', [expense.libelle, expense.montant, expense.id_payeur, expense.id_categorie, expense.id]);
    }

    // Requete pour créer un dépense 
    create(expense: Expense) {
        return this.dataSource.query('insert into depense (libelle, montant, id_payeur, id_categorie) values (?, ?, ?, ?)', [expense.libelle, expense.montant, expense.id_payeur, expense.id_categorie]);
    }

    // Requete pour supprimer un dépense 
    delete(id: number) {
        return this.dataSource.query('delete from depense where id = ?', [id]);
    }

    // Requete pour associer une dépense à un utilisateur
    associationUtiDep(id_depense: number, id_utilisateur: number) {
        return this.dataSource.query('insert into participation (id_depense, id_utilisateur) values (?, ?)', [id_depense, id_utilisateur]);
    }

    // Requete pour dissocier une dépense d'un un utilisateur
    deleteParticipation(id_depense: number, id_utilisateur: number) {
        return this.dataSource.query('delete from participation where id_depense = ? and id_utilisateur = ?', [id_depense, id_utilisateur]);
    }

    // Requete pour obtenir ce que doit une personne à une autre
    /**
     * Récupération des données nécesaire à l'affichage à partir de la table depense
     * join avec la requete (t1) pour obtenir le nombre de participants (count) par dépense (id_depense)
     * join avec la table participants pour obtenir les utilisateurs participants à chque dépense
     * join avec la table utilisateur (u1) pour définir l'utilisateur qui a fait les dépenses
     * et (u2) pour définir celui qui va devoir rembourser
     * avec le 'WHERE' on ne fait pas les opérations lorsque l'utilisateur debiteur est le meme que celui créditeur
     * on groupe ensuite le resultat par utilisateur débiteur et utilisateur créditeur
    */
    egalisation() {
        return this.dataSource.query(`
            SELECT
                u1.pseudo AS utilisateur_debiteur,
                u2.pseudo AS utilisateur_crediteur,
                SUM(d.montant / t1.count) AS montant_du
            FROM
                depense d
                JOIN (
                    SELECT
                        p.id_depense,
                        COUNT(p.id_utilisateur) AS count
                    FROM
                        participation p
                    GROUP BY
                        p.id_depense
                ) t1 ON d.id = t1.id_depense
                JOIN participation p ON d.id = p.id_depense
                JOIN utilisateur u1 ON d.id_payeur = u1.id
                JOIN utilisateur u2 ON p.id_utilisateur = u2.id
            WHERE
                u1.pseudo <> u2.pseudo
            GROUP BY
                u1.pseudo,
                u2.pseudo;
        `);
    }
}
