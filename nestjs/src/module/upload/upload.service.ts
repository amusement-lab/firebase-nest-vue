import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client } from '@aws-sdk/client-s3';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FileUploadService {
  constructor(
    private prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async uploadFile(dataBuffer: Buffer, fileName: string) {
    try {
      const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
      const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
      const region = process.env.AWS_REGION;
      const bucket = process.env.AWS_BUCKET_NAME;

      const uploadProgress = new Upload({
        client: new S3Client({
          credentials: {
            accessKeyId,
            secretAccessKey,
          },
          region,
        }),
        params: {
          Bucket: bucket,
          Key: `${Date.now().toString()}-${fileName}`,
          Body: dataBuffer,
          ContentType: 'image/jpg, image/png, image/jpeg',
        },
        tags: [], // optional tags
        queueSize: 4, // optional concurrency configuration
        partSize: 1024 * 1024 * 5, // optional size of each part, in bytes, at least 5MB
        leavePartsOnError: false, // optional manually handle dropped parts
      });

      const fileStorageInDB = await uploadProgress.done();

      return fileStorageInDB;
    } catch (e) {
      console.log(e);
    }
  }
}
