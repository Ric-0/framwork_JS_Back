import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { Category } from "./class/category.class";


@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService) {}

    // Obtenir la liste des categories
    @Get('getAll')
    findAll() {
        return this.categoryService.findAll()
    }

    // Obtenir un categorie
    @Get('getOne')
    find(@Query('id') id: number) {
        return this.categoryService.find(id)
    }

    // Modifier un categorie
    @Put('update')
    update(@Query('id') id: number, @Query('libelle') libelle: string) {
        let categorie = new Category(libelle)
        categorie.id = id
        console.log(categorie);
        
        return this.categoryService.update(categorie)
    }

    // Créer un categorie
    @Post('create')
    create(@Body() userData: any) {
        let categorie = new Category(userData.libelle)
        return this.categoryService.create(categorie)
    }

    // Supprimer un categorie
    @Delete('delete')
    delete(@Query('id') id: number) {
        return this.categoryService.delete(id)
    }
}