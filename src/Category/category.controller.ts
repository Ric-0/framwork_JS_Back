import { Controller, Delete, Get, Post, Put } from "@nestjs/common";


@Controller('category')
export class CategoryController {
    // Obtenir la liste des categories
    @Get()
    findAll() {
        
    }

    // Obtenir un categorie
    @Get()
    find(id: number) {

    }

    // Modifier un categorie
    @Put()
    update() {

    }

    // Créer un categorie
    @Post()
    create() {

    }

    // Supprimer un categorie
    @Delete()
    delete() {
        
    }
}