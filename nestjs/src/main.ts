import { NestFactory } from '@nestjs/core';
import {
  initializeApp as initializeFirebaseApp,
  cert,
} from 'firebase-admin/app';

import firebaseAdmin from '../firebaseAdmin.config';
import { AppModule } from './app.module';
import { PrismaService } from './module/prisma/prisma.service';

async function bootstrap() {
  initializeFirebaseApp({ credential: cert(firebaseAdmin) });

  const app = await NestFactory.create(AppModule);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(process.env.PORT);
}
bootstrap();
