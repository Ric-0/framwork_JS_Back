import { Controller, Delete, Get, Post, Put } from "@nestjs/common";


@Controller('expense')
export class ExpenseController {
    // Obtenir la liste des depenses
    @Get()
    findAll() {
        
    }

    // Obtenir un depense
    @Get()
    find(id: number) {

    }

    // Modifier un depense
    @Put()
    update() {

    }

    // Créer un depense
    @Post()
    create() {

    }

    // Supprimer un depense
    @Delete()
    delete() {
        
    }
}