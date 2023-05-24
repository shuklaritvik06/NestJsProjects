import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }
  githubLogin(req) {
    if (!req.user) {
      return 'No user from github';
    }

    return {
      message: 'User information from github',
      user: req.user,
    };
  }
}
