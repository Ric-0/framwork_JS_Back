import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { Category } from "./class/category.class";


@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService) {}

    // Création de la route pour obtenir la liste des catégories
    @Get('getAll')
    findAll() {
        return this.categoryService.findAll()
    }

    // Création de la route pour obtenir une catégorie
    @Get('getOne')
    find(@Query('id') id: number) {
        return this.categoryService.find(id)
    }

    // Création de la route pour modifier une catégorie
    @Put('update')
    update(@Query('id') id: number, @Query('libelle') libelle: string) {
        let categorie = new Category(libelle)
        categorie.id = id
        console.log(categorie);
        
        return this.categoryService.update(categorie)
    }

    // Création de la route pour créer une catégorie
    @Post('create')
    create(@Body() userData: any) {
        let categorie = new Category(userData.libelle)
        return this.categoryService.create(categorie)
    }

    // Création de la route pour supprimer une catégorie
    @Delete('delete')
    delete(@Query('id') id: number) {
        return this.categoryService.delete(id)
    }
}