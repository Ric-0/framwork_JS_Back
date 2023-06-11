import { Inject, Injectable } from "@nestjs/common";
import { Expense } from "./class/expense.class";


@Injectable()
export class ExpenseService {

    constructor(@Inject('EXPENSE_REPOSITORY') private readonly dataSource: any) {}

    // Obtenir la liste des depenses
    findAll(): Promise<Expense[]> {
        return this.dataSource.query(`SELECT d.id, d.libelle, d.montant, c.libelle AS libelle_categorie, u.pseudo AS pseudo, GROUP_CONCAT(u2.pseudo SEPARATOR ', ') AS participants
                                        FROM depense d
                                        JOIN categorie c ON d.id_categorie = c.id
                                        JOIN utilisateur u ON d.id_payeur = u.id
                                        LEFT JOIN participation p ON d.id = p.id_depense
                                        JOIN utilisateur u2 on p.id_utilisateur = u2.id
                                        GROUP BY d.id, d.libelle, d.montant, c.libelle;`)
    }

    // Obtenir un depense
    find(id: number): Promise<Expense> {
        return this.dataSource.query('select * from depense where id = ?', [id])
    }

    // Modifier un depense
    update(expense: Expense) {
        return this.dataSource.query('update depense set libelle = ?, montant = ?, id_payeur = ?, id_categorie = ? where id = ?', [expense.libelle, expense.montant, expense.id_payeur, expense.id_categorie, expense.id])
    }

    // Créer un depense
    create(expense: Expense) {
        return this.dataSource.query('insert into depense (libelle, montant, id_payeur, id_categorie) values (?, ?, ?, ?)', [expense.libelle, expense.montant, expense.id_payeur, expense.id_categorie])
    }

    // Supprimer un depense
    delete(id: number) {
        return this.dataSource.query('delete from depense where id = ?', [id])
    }

    // Association Utilisateur - Depense
    associationUtiDep(id_depense: number, id_utilisateur: number) {
        return this.dataSource.query('insert into participation (id_depense, id_utilisateur) values (?, ?)', [id_depense, id_utilisateur])
    }

    // Suppression de la participation
    deleteParticipation(id_depense: number, id_utilisateur: number) {
        return this.dataSource.query('delete from participation where id_depense = ? and id_utilisateur = ?', [id_depense, id_utilisateur])
    }

    // Calcul égalisation des montant
    egalisation() {
        return this.dataSource.query(`SELECT
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
                u2.pseudo;`)
    }


}