import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pseudo: string;

    @Column()
    password: string;

    constructor(pseudo: string, password: string) {
        this.pseudo = pseudo
        this.password = password
    }
}