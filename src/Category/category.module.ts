import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { DatabaseModule } from "src/Database/database.module";
import { categoryProviders } from "./category.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [CategoryController],
    providers: [
        ...categoryProviders,
        CategoryService
    ]
})
export class CategoryModule {}