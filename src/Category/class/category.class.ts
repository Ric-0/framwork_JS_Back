import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    libelle: string;

    constructor(libelle: string) {
        this.libelle = libelle
    }
}