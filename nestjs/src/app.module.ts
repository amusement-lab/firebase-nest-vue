import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from './module/prisma/prisma.module';
import { UserModule } from './module/user/user.module';
import { FileUploadModule } from './module/upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UserModule,
    FileUploadModule,
  ],
})
export class AppModule {}
