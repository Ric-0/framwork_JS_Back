import { Inject, Injectable } from "@nestjs/common";
import { User } from "./class/user.class";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(@Inject('USER_REPOSITORY') private readonly dataSource: any) {}

    // Requete pour obtenir la liste des utilisateurs
    findAll(): Promise<User[]> {
        return this.dataSource.query('select id, pseudo from utilisateur')
    }

    // Requete pour obtenir un utilisateur 
    find(id: number): Promise<User> {
        return this.dataSource.query('select * from utilisateur where id = ?', [id])
    }

    // Requete pour modifier un utilisateur 
    update(user: User) {
        return this.dataSource.query('update utilisateur set pseudo = ? where id = ?', [user.pseudo, user.id])
    }

    // Requete pour créer un utilisateur 
    async create(user: User) {
        user.password = await bcrypt.hash(user.password, 10);
        return this.dataSource.query('insert into utilisateur (pseudo, password) values (?, ?)', [user.pseudo, user.password])
    }

    // Requete pour supprimer un utilisateur 
    delete(id: number) {
        return this.dataSource.query('delete from utilisateur where id = ?', [id])
    }

    // Requete pour connecter un utilisateur 
    async connect(user: User) {
        let infoUser = await this.dataSource.query('select * from utilisateur where pseudo = ?', [user.pseudo])
        // Verification de la présence d'un utilisateur
        if(infoUser) {
            const isMatch = await bcrypt.compare(user.password, infoUser[0].password);
            // Vérification de si le mot de passe entré par l'utilisateur correspond 
            if(isMatch) {
                // Retourne l'id de l'utilisateur pour les insertions futures
                return infoUser[0].id
            } else {
                return false
            }
        } else {
            return false
        }
    }
}