import { Controller, Delete, Get, HttpStatus, Post, Put, Res } from "@nestjs/common";
import { Response } from 'express';
import { ExpenseService } from "./expense.service";
import { Expense } from "./class/expense.class";

@Controller('expense')
export class ExpenseController {  

    constructor(private expenseService: ExpenseService) {}

    // Obtenir la liste des depenses
    @Get()
    async findAll() {
        return await this.expenseService.findAll()
    }

    // Obtenir un depense
    @Get()
    async find(id: number) {
        return await this.expenseService.find(id)
    }

    // Modifier un depense
    @Put()
    async update(libelle: string, montant: number, id_payeur: number, id_categorie: number) {
        let expense = new Expense(libelle, montant, id_payeur, id_categorie)
        return await this.expenseService.update(expense)
    }

    // Créer un depense
    @Post()
    async create(libelle: string, montant: number, id_payeur: number, id_categorie: number) {
        let expense = new Expense(libelle, montant, id_payeur, id_categorie)
        return await this.expenseService.create(expense)
    }

    // Supprimer un depense
    @Delete()
    async delete(id: number) {
        return await this.expenseService.delete(id)
    }
}