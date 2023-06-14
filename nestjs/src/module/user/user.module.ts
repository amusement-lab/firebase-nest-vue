import { Module } from '@nestjs/common';
import { AuthController } from './user.controller';
import { UserService } from './user.service';
import { FileUploadModule } from '../upload/upload.module';

@Module({
  controllers: [AuthController],
  providers: [UserService],
  imports: [FileUploadModule],
})
export class UserModule {}
