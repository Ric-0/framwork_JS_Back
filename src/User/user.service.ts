import { Inject, Injectable } from "@nestjs/common";
import { User } from "./class/user.class";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(@Inject('USER_REPOSITORY') private readonly dataSource: any) {}

    // Obtenir la liste des utilisateurs
    findAll(): Promise<User[]> {
        return this.dataSource.query('select id, pseudo from utilisateur')
    }

    // Obtenir un utilisateur
    find(id: number): Promise<User> {
        return this.dataSource.query('select * from utilisateur where id = ?', [id])
    }

    // Modifier un utilisateur
    update(user: User) {
        return this.dataSource.query('update utilisateur set nom = ?, prenom = ?, pseudo = ? where id = ?', [user.pseudo, user.id])
    }

    // Créer un utilisateur
    async create(user: User) {
        user.password = await bcrypt.hash(user.password, 10);
        return this.dataSource.query('insert into utilisateur (pseudo, password) values (?, ?)', [user.pseudo, user.password])
    }

    // Supprimer un utilisateur
    delete(id: number) {
        return this.dataSource.query('delete from utilisateur where id = ?', [id])
    }

    // Connexion
    async connect(user: User) {
        let infoUser = await this.dataSource.query('select * from utilisateur where pseudo = ?', [user.pseudo])
        if(infoUser) {
            const isMatch = await bcrypt.compare(user.password, infoUser[0].password);
            if(isMatch) {
                return infoUser[0].id
            } else {
                return false
            }
        } else {
            return false
        }
    }
}