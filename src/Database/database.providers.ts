import { Category } from 'src/Category/class/category.class';
import { Expense } from 'src/Expense/class/expense.class';
import { User } from 'src/User/class/user.class';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE', // Nom du provider pour ensuite l'appeler
    useFactory: async () => {
      // Crée une nouvelle instance de DataSource en spécifiant la configuration de la base de données
      const dataSource = new DataSource({
        type: 'mysql', // Type de base de données
        host: 'localhost', // Hôte de la base de données
        port: 3306, // Port de la base de données
        username: 'framwork_back', // Nom d'utilisateur de la base de données
        password: 'D2sD/6}gYzv=54', // Mot de passe de la base de données
        database: 'framwork_js', // Nom de la base de données
        entities: [Category, Expense, User], // Liste des entités utilisées dans la base de données
        synchronize: true, // Synchronisation automatique des schémas de base de données avec les entités
      });

      // Initialise et retourne la source de données
      return dataSource.initialize();
    },
  },
];