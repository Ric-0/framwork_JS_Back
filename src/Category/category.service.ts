import { Inject, Injectable } from "@nestjs/common";
import { Category } from "./class/category.class";


@Injectable()
export class CategoryService {

    constructor(@Inject('CATEGORY_REPOSITORY') private readonly dataSource: any) {}

    // Obtenir la liste des categories
    findAll(): Promise<Category[]> {
        return this.dataSource.query('select * from categorie')
    }

    // Obtenir un categorie
    find(id: number): Promise<Category> {
        return this.dataSource.query('select * from categorie where id = ?', [id])
    }

    // Modifier un categorie
    update(category: Category) {
        return this.dataSource.query('update categorie set libelle = ? where id = ?', [category.libelle, category.id])
    }

    // Créer un categorie
    create(category: Category) {
        return this.dataSource.query('insert into categorie (libelle) values (?)', [category.libelle])
    }

    // Supprimer un categorie
    delete(id: number) {
        return this.dataSource.query('delete from categorie where id = ?', [id])
    }
}