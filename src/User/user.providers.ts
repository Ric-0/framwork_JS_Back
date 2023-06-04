import { DataSource } from 'typeorm';
import { User } from './class/user.class';

export const userProviders = [
    {
      provide: 'USER_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
      inject: ['DATA_SOURCE'],
    },
];