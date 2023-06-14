import {
  Controller,
  Post,
  Headers,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadService } from '../upload/upload.service';
import { Express } from 'express';

@Controller()
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly fileUploadService: FileUploadService,
  ) {}

  @Post('/verify/firebase')
  async loginOwner(@Headers('authorization') authorization: string) {
    const firebaseData = await this.userService.verifyId(authorization);
    return {
      photo: firebaseData.picture,
      name: firebaseData.name,
      email: firebaseData.email,
    };
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<any> {
    const uploadedFile = await this.fileUploadService.uploadFile(
      file.buffer,
      file.originalname,
    );
    // console.log('File has been uploaded,', uploadedFile);
    return { message: 'File has been uploaded', data: uploadedFile };
  }
}
