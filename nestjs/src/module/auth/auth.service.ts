import { Injectable } from '@nestjs/common';
import { getAuth } from 'firebase-admin/auth';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async verifyId({ token }: { token: string }): Promise<any> {
    return getAuth().verifyIdToken(token);
  }
}
