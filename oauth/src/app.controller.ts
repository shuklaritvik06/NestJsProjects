import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { GoogleOAuthGuard } from './guards/google.guard';
import { GitHubOAuthGuard } from './guards/github.guard';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/google')
  @UseGuards(GoogleOAuthGuard)
  googleAuth(@Request() req) {
    console.log(req);
  }

  @Get('/github')
  @UseGuards(GitHubOAuthGuard)
  githubAuth(@Request() req) {
    console.log(req);
  }

  @Get('callback/google')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req) {
    return this.appService.googleLogin(req);
  }

  @Get('callback/github')
  @UseGuards(GitHubOAuthGuard)
  githubAuthRedirect(@Request() req) {
    return this.appService.githubLogin(req);
  }
}
