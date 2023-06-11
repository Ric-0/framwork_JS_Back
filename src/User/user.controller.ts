import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./class/user.class";


@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    // Obtenir la liste des utilisateurs
    @Get('getAll')
    findAll() {
        return this.userService.findAll()
    }

    // Obtenir un utilisateur
    @Get('getOne')
    find(@Query('id') id: number) {
        return this.userService.find(id)
    }

    // Modifier un utilisateur
    @Put('update')
    update(@Query('id') id: number, @Query('pseudo') pseudo: string, @Query('password') password: string) {
        let user = new User(pseudo, password)
        user.id = id
        return this.userService.update(user)
    }

    // Créer un utilisateur
    @Post('create')
    async create(@Body() userData: any) {
        let user = new User(userData.pseudo, userData.password)
        return await this.userService.create(user)
    }

    // Supprimer un utilisateur
    @Delete('delete')
    delete(@Query('id') id: number) {
        return this.userService.delete(id)
    }

    @Get('connect')
    async connect(@Query('pseudo') pseudo: string, @Query('password') password: string) {
        let user = new User(pseudo, password)
        return await this.userService.connect(user)
    }
}