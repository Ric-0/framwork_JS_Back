import { Inject, Injectable } from "@nestjs/common";
import { Expense } from "./class/expense.class";
import { Repository } from "typeorm";


@Injectable()
export class ExpenseService {

    constructor(
        @Inject('EXPENSE_REPOSITORY')
        private expenseRepository: Repository<Expense>
    ) {}

    // Obtenir la liste des depenses
    findAll(): Promise<Expense[]> {
        return this.expenseRepository.find()
    }

    // Obtenir un depense
    find(id: number): Promise<Expense> {
        return this.expenseRepository.findOne({
            where: {id: id}
        })
    }

    // Modifier un depense
    update(expense: Expense) {
        return this.expenseRepository.update({
            id: expense.id
        }, {
            libelle: expense.libelle,
            montant: expense.montant,
            id_payeur: expense.id_payeur,
            id_categorie: expense.id_payeur
        })
    }

    // Créer un depense
    create(expense: Expense) {
        return this.expenseRepository.create(expense)
    }

    // Supprimer un depense
    delete(id: number) {
        return this.expenseRepository.delete({
            id: id
        })
    }
}