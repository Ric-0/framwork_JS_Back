import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders], // Fournit les fournisseurs de la base de données à utiliser dans le module.
  exports: [...databaseProviders], // Exporte les fournisseurs de la base de données pour qu'ils puissent être utilisés par d'autres modules.
})
export class DatabaseModule {}