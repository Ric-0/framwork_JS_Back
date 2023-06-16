import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./class/user.class";


@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    // Création de la route pour obtenir la liste des utilisateurs
    @Get('getAll')
    findAll() {
        return this.userService.findAll()
    }

    // Création de la route pour obtenir un utilisateur
    @Get('getOne')
    find(@Query('id') id: number) {
        return this.userService.find(id)
    }

    // Création de la route pour modifier un utilisateur
    @Put('update')
    update(@Body() userData: any) {
        let user = new User(userData.pseudo, userData.password)
        user.id = userData.id
        return this.userService.update(user)
    }

    // Création de la route pour créer un utilisateur
    @Post('create')
    async create(@Body() userData: any) {
        let user = new User(userData.pseudo, userData.password)
        return await this.userService.create(user)
    }

    // Création de la route pour supprimer un utilisateur
    @Delete('delete')
    delete(@Query('id') id: number) {
        return this.userService.delete(id)
    }

    // Création de la route pour connecter un utilisateur
    @Get('connect')
    async connect(@Query('pseudo') pseudo: string, @Query('password') password: string) {
        let user = new User(pseudo, password)
        return await this.userService.connect(user)
    }
}