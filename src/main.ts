import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import * as cors from 'cors';

async function bootstrap() {
  // Crée une instance de l'application Nest.js
  const app = await NestFactory.create(AppModule);

  // Configuration CORS
  const corsOptions: CorsOptions = {
    origin: '*', // Autorise toutes les origines
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Autorise les méthodes HTTP
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: 'Content-Type',
  };

  // Utilise le middleware CORS avec les options spécifiées
  app.use(cors(corsOptions));

  // Démarre le serveur en écoutant sur le port 3000
  await app.listen(3000);
}
bootstrap();