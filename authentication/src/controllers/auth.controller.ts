import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomerDTO } from 'src/dtos/customer.dto';
import { LoginDTO } from 'src/dtos/login.dto';
import { AuthService } from 'src/services/auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('/:id')
  getUser(@Param('id') id: string) {
    return this.authService.getUser(id);
  }
  @Post('/signup')
  async signup(@Body() newUser: CustomerDTO) {
    return this.authService.signup(newUser);
  }

  @Post('/login')
  async login(@Body() user: LoginDTO) {
    return this.authService.login(user);
  }
}
