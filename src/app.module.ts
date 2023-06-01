import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { CategoryModule } from './Category/category.module';
import { ExpenseModule } from './Expense/expense.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User/class/user.class';
import { Category } from './Category/class/category.class';
import { Expense } from './Expense/class/expense.class';

@Module({
  imports: [
    CategoryModule, 
    ExpenseModule, 
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'framwork_back',
      password: 'D2sD/6}gYzv=54',
      database: 'test',
      entities: [User, Category, Expense],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
