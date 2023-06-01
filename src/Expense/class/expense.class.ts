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
}