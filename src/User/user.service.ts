import { Inject, Injectable } from "@nestjs/common";
import { User } from "./class/user.class";
import { Repository } from "typeorm";


@Injectable()
export class UserService {

    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>
    ) {}

    // Obtenir la liste des utilisateurs
    findAll(): Promise<User[]> {
        return this.userRepository.find()
    }

    // Obtenir un utilisateur
    find(id: number): Promise<User> {
        return this.userRepository.findOne({
            where: {id: id}
        })
    }

    // Modifier un utilisateur
    update(user: User) {
        return this.userRepository.update({
            id: user.id
        }, {
            nom: user.nom,
            prenom: user.prenom,
            pseudo: user.pseudo
        })
    }

    // Créer un utilisateur
    create(user: User) {
        return this.userRepository.create(user)
    }

    // Supprimer un utilisateur
    delete(id: number) {
        return this.userRepository.delete({
            id: id
        })
    }
}