import { Inject, Injectable } from "@nestjs/common";
import { Category } from "./class/category.class";
import { Repository } from "typeorm";


@Injectable()
export class CategoryService {

    constructor(
        @Inject('CATEGORY_REPOSITORY')
        private categoryRepository: Repository<Category>
    ) {}

    // Obtenir la liste des categories
    findAll(): Promise<Category[]> {
        return this.categoryRepository.find()
    }

    // Obtenir un categorie
    find(id: number): Promise<Category> {
        return this.categoryRepository.findOne({
            where: {id: id}
        })
    }

    // Modifier un categorie
    update(category: Category) {
        return this.categoryRepository.update({
            id: category.id
        }, {
            libelle: category.libelle
        })
    }

    // Créer un categorie
    create(category: Category) {
        return this.categoryRepository.create(category)
    }

    // Supprimer un categorie
    delete(id: number) {
        this.categoryRepository.delete({
            id: id
        })
    }
}