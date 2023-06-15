import {
  Controller,
  Post,
  Headers,
  UploadedFile,
  UseInterceptors,
  Body,
  UploadedFiles,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  FileInterceptor,
  FileFieldsInterceptor,
} from '@nestjs/platform-express';
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
  @UseInterceptors(FileInterceptor('image1'))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<any> {
    const uploadedFile = await this.fileUploadService.uploadFile(
      file.buffer,
      file.originalname,
    );
    // console.log('File has been uploaded,', uploadedFile);
    return { message: 'File has been uploaded', data: uploadedFile };
  }

  @Post('/uploads')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image1', maxCount: 1 },
      { name: 'image2', maxCount: 1 },
    ]),
  )
  async uploadFiles(
    @Body() body: any,
    @UploadedFiles()
    files: {
      image1?: Express.Multer.File[];
      image2?: Express.Multer.File[];
    },
  ): Promise<any> {
    console.log(body, files);
    const images = [];
    for (const property in files) {
      const file = files[property][0];
      const uploadImage = await this.fileUploadService.uploadFile(
        file.buffer,
        file.originalname,
      );
      images.push(uploadImage);
    }
    return { message: 'File has been uploaded', images };
  }
}
