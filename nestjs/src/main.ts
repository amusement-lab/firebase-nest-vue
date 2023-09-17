import { NestFactory } from '@nestjs/core';
import {
  initializeApp as initializeFirebaseApp,
  cert,
} from 'firebase-admin/app';

import firebaseAdmin from '../firebaseAdmin.config';
import { AppModule } from './app.module';

async function bootstrap() {
  initializeFirebaseApp({ credential: cert(firebaseAdmin) });

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(process.env.PORT);
}
bootstrap();
