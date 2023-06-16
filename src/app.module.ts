import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { CategoryModule } from './Category/category.module';
import { ExpenseModule } from './Expense/expense.module';

/* The AppModule imports and declares controllers and providers for the CategoryModule, ExpenseModule,
UserModule, AppController, and AppService in a TypeScript module. */
@Module({
  imports: [
    CategoryModule, // Importe le module CategoryModule
    ExpenseModule, // Importe le module ExpenseModule
    UserModule, // Importe le module UserModule
  ],
  controllers: [AppController], // Déclare le contrôleur AppController
  providers: [AppService], // Déclare le fournisseur de service AppService
})
export class AppModule {}
