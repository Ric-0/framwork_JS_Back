import { Category } from 'src/Category/class/category.class';
import { Expense } from 'src/Expense/class/expense.class';
import { User } from 'src/User/class/user.class';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'framwork_back',
        password: 'D2sD/6}gYzv=54',
        database: 'test',
        entities: [User, Category, Expense],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];