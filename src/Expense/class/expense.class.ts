import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Indique que cette classe est une entité gérée par TypeORM.
export class Expense {
    
    @PrimaryGeneratedColumn() // Indique que la propriété 'id' est une clé primaire auto-générée.
    id: number;

    @Column() // Indique que la propriété 'libelle' est une colonne dans la table de la base de données.
    libelle: string;

    @Column() // Indique que la propriété 'montant' est une colonne dans la table de la base de données.
    montant: number;
    
    @Column() // Indique que la propriété 'id_payeur' est une colonne dans la table de la base de données.
    id_payeur: number;

    @Column() // Indique que la propriété 'id_categorie' est une colonne dans la table de la base de données.
    id_categorie: number

    // Constructeur de la classe Expense 
    constructor(libelle: string, montant: number, id_payeur: number, id_categorie: number) {
        this.libelle = libelle
        this.montant = montant
        this.id_payeur = id_payeur
        this.id_categorie = id_categorie
    }
}