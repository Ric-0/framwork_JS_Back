import { Injectable } from "@nestjs/common";
import { User } from "./interface/user.interface";


@Injectable()
export class UserService {
    // Obtenir la liste des utilisateurs
    findAll(): Promise<User[]> {
        return
    }

    // Obtenir un utilisateur
    find(id: number): Promise<User> {
        return 
    }

    // Modifier un utilisateur
    update() {

    }

    // Créer un utilisateur
    create() {

    }

    // Supprimer un utilisateur
    delete() {
        
    }
}