import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Query, Res } from "@nestjs/common";
import { ExpenseService } from "./expense.service";
import { Expense } from "./class/expense.class";

@Controller('expense')
export class ExpenseController {  

    constructor(private expenseService: ExpenseService) {}

    // Création de la route pour obtenir la liste des dépenses
    @Get('getAll')
    async findAll() {
        return await this.expenseService.findAll()
    }

    // Création de la route pour obtenir une dépense
    @Get('getOne')
    async find(@Query('id') id: number) {
        return await this.expenseService.find(id)
    }

    // Création de la route pour modifier une dépense
    @Put('update')
    async update(@Body() expenseData: any) {
        let expense = new Expense(expenseData.libelle, expenseData.montant, expenseData.id_payeur, expenseData.id_categorie)
        expense.id = expenseData.id
        return await this.expenseService.update(expense)
    }

    // Création de la route pour créer une dépense
    @Post('create')
    async create(@Body() expenseData: any) {
        let expense = new Expense(expenseData.libelle, expenseData.montant, expenseData.id_payeur, expenseData.id_categorie)
        return await this.expenseService.create(expense)
    }

    // Création de la route pour supprimer une dépense
    @Delete('delete')
    async delete(@Query('id') id: number) {
        return await this.expenseService.delete(id)
    }

    // Création de la route pour lier une dépense à un utilisateur
    @Post('participation')
    associationUtiDep(@Body() expenseData: any) {
        return this.expenseService.associationUtiDep(expenseData.id_depense, expenseData.id_utilisateur)
    }

    // Création de la route pour supprimer un lien une dépense à un utilisateur
    @Delete('deleteParticipation')
    deleteParticipation(@Query('id_depense') id_depense: number, @Query('id_utilisateur') id_utilisateur: number) {
        return this.expenseService.deleteParticipation(id_depense, id_utilisateur)
    }

    // Création de la route pour récupérer la distribution pour visualiser les remboursement à faire
    @Get('distribution')
    egalisation() {
        return this.expenseService.egalisation()
    }
}