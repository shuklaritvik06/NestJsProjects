import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  pong(): { message: string } {
    return {
      message: 'Pong, API IS UP',
    };
  }
}
