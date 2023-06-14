import { Injectable } from '@nestjs/common';
import { getAuth } from 'firebase-admin/auth';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async verifyId(token: string) {
    return getAuth().verifyIdToken(token);
  }
}
