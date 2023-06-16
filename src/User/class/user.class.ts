import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Indique que cette classe est une entité gérée par TypeORM.
export class User {

    @PrimaryGeneratedColumn() // Indique que la propriété 'id' est une clé primaire auto-générée.
    id: number;

    @Column() // Indique que la propriété 'pseudo' est mappée à une colonne dans la table de la base de données.
    pseudo: string;

    @Column() // Indique que la propriété 'password' est mappée à une colonne dans la table de la base de données.
    password: string;

    // Constructeur de la classe User 
    constructor(pseudo: string, password: string) {
        this.pseudo = pseudo
        this.password = password
    }
}