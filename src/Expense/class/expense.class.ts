import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Expense {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    libelle: string;

    @Column()
    montant: number;
    
    @Column()
    id_payeur: number;

    @Column()
    id_categorie: number

    constructor(libelle: string, montant: number, id_payeur: number, id_categorie: number) {
        this.libelle = libelle
        this.montant = montant
        this.id_payeur = id_payeur
        this.id_categorie = id_categorie
    }
}