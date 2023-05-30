import { Controller, Post, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/verify/firebase')
  async loginOwner(
    @Headers('authorization') authorization: string,
  ): Promise<any> {
    return this.authService.verifyId(authorization);
  }
}
