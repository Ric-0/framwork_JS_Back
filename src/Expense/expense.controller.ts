import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Query, Res } from "@nestjs/common";
import { ExpenseService } from "./expense.service";
import { Expense } from "./class/expense.class";

@Controller('expense')
export class ExpenseController {  

    constructor(private expenseService: ExpenseService) {}

    // Obtenir la liste des depenses
    @Get('getAll')
    async findAll() {
        return await this.expenseService.findAll()
    }

    // Obtenir un depense
    @Get('getOne')
    async find(@Query('id') id: number) {
        return await this.expenseService.find(id)
    }

    // Modifier un depense
    @Put('update')
    async update(@Query('id') id: number, @Query('libelle') libelle: string, @Query('montant') montant: number, @Query('id_payeur') id_payeur: number, @Query('id_categorie') id_categorie: number) {
        let expense = new Expense(libelle, montant, id_payeur, id_categorie)
        expense.id = id
        return await this.expenseService.update(expense)
    }

    // Créer un depense
    @Post('create')
    async create(@Body() expenseData: any) {
        console.log(expenseData);
        
        let expense = new Expense(expenseData.libelle, expenseData.montant, expenseData.id_payeur, expenseData.id_categorie)
        return await this.expenseService.create(expense)
    }

    // Supprimer un depense
    @Delete('delete')
    async delete(@Query('id') id: number) {
        return await this.expenseService.delete(id)
    }

    @Post('participation')
    associationUtiDep(@Body() expenseData: any) {
        console.log(expenseData);
        
        return this.expenseService.associationUtiDep(expenseData.id_depense, expenseData.id_utilisateur)
    }

    @Delete('deleteParticipation')
    deleteParticipation(@Query('id_depense') id_depense: number, @Query('id_utilisateur') id_utilisateur: number) {
        return this.expenseService.deleteParticipation(id_depense, id_utilisateur)
    }

    @Get('distribution')
    egalisation() {
        return this.expenseService.egalisation()
    }
}