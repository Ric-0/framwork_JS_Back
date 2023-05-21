import { Injectable } from "@nestjs/common";
import { Category } from "./interface/category.interface";


@Injectable()
export class CategoryService {
    // Obtenir la liste des categories
    findAll(): Promise<Category[]> {
        return
    }

    // Obtenir un categorie
    find(id: number): Promise<Category> {
        return 
    }

    // Modifier un categorie
    update() {

    }

    // Créer un categorie
    create() {

    }

    // Supprimer un categorie
    delete() {
        
    }
}