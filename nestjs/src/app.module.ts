import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from './module/prisma/prisma.module';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, AuthModule],
})
export class AppModule {}
