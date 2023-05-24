import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from './types/interfaces';
import { SkipThrottle } from '@nestjs/throttler';

@SkipThrottle()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getStatus(): Response {
    return this.appService.getStatus();
  }
}
