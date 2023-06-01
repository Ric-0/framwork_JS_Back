import { Injectable } from "@nestjs/common";
import { Expense } from "./class/expense.class";


@Injectable()
export class ExpenseService {
    // Obtenir la liste des depenses
    findAll(): Promise<Expense[]> {
        return
    }

    // Obtenir un depense
    find(id: number): Promise<Expense> {
        return 
    }

    // Modifier un depense
    update() {

    }

    // Créer un depense
    create() {

    }

    // Supprimer un depense
    delete() {
        
    }
}