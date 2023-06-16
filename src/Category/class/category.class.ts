import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Indique que cette classe est une entité gérée par TypeORM.
export class Category {

    @PrimaryGeneratedColumn() // Indique que la propriété 'id' est une clé primaire auto-générée.
    id: number;
    
    @Column() // Indique que la propriété 'libelle' est une colonne dans la table de la base de données.
    libelle: string;

    // Constructeur de la classe Category 
    constructor(libelle: string) {
        this.libelle = libelle
    }
}