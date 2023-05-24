import { Injectable } from '@nestjs/common';
import { Response } from './types/interfaces';

@Injectable()
export class AppService {
  getStatus(): Response {
    return {
      author: 'shukla ritvik',
      date: new Date(),
      description: 'API for learning authentication with jwt',
      server: 'NEST server',
      status: 'success, API is up!',
    };
  }
}
