import { Inject, Injectable } from "@nestjs/common";
import { Category } from "./class/category.class";


@Injectable()
export class CategoryService {

    constructor(@Inject('CATEGORY_REPOSITORY') private readonly dataSource: any) {}

    // Requete pour obtenir la liste des catégories
    findAll(): Promise<Category[]> {
        return this.dataSource.query('select * from categorie')
    }

    // Requete pour obtenir un catégorie 
    find(id: number): Promise<Category> {
        return this.dataSource.query('select * from categorie where id = ?', [id])
    }

    // Requete pour modifier un catégorie 
    update(category: Category) {
        return this.dataSource.query('update categorie set libelle = ? where id = ?', [category.libelle, category.id])
    }

    // Requete pour créer un catégorie 
    create(category: Category) {
        return this.dataSource.query('insert into categorie (libelle) values (?)', [category.libelle])
    }

    // Requete pour supprimer un catégorie 
    delete(id: number) {
        return this.dataSource.query('delete from categorie where id = ?', [id])
    }
}