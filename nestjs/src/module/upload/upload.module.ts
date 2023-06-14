import { Module } from '@nestjs/common';
import { FileUploadService } from '../upload/upload.service';

@Module({
  controllers: [],
  providers: [FileUploadService],
  exports: [FileUploadService],
})
export class FileUploadModule {}
