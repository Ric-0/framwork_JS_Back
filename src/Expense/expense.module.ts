import { Module } from "@nestjs/common";
import { ExpenseController } from "./expense.controller";
import { ExpenseService } from "./expense.service";
import { DatabaseModule } from "src/Database/database.module";
import { expenseProviders } from "./expense.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [ExpenseController],
    providers: [
        ...expenseProviders,
        ExpenseService
    ]
})
export class ExpenseModule {}