import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './strategy/google.strategy';
import { GitHubStrategy } from './strategy/github.strategy';

@Module({
  imports: [ConfigModule.forRoot(), PassportModule],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy, GitHubStrategy],
})
export class AppModule {}
