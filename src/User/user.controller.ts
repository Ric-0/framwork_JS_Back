import { Controller, Delete, Get, Post, Put } from "@nestjs/common";


@Controller('user')
export class UserController {
    // Obtenir la liste des utilisateurs
    @Get()
    findAll() {
        
    }

    // Obtenir un utilisateur
    @Get()
    find(id: number) {

    }

    // Modifier un utilisateur
    @Put()
    update() {

    }

    // Créer un utilisateur
    @Post()
    create() {

    }

    // Supprimer un utilisateur
    @Delete()
    delete() {
        
    }
}