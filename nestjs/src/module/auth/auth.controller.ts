import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/verify/firebase')
  async loginOwner(@Body() body: { token: string }): Promise<any> {
    return this.authService.verifyId(body);
  }
}
