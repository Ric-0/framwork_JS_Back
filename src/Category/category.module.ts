import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { DatabaseModule } from "src/Database/database.module";
import { categoryProviders } from "./category.providers";

@Module({
    imports: [DatabaseModule], // Importe le module DatabaseModule
    controllers: [CategoryController], // Déclare le contrôleur CategoryController
    providers: [
        ...categoryProviders, // Inclut tous les fournisseurs de catégorie définis dans category.providers.ts
        CategoryService // Déclare le fournisseur de service CategoryService
    ]
})
export class CategoryModule {}
