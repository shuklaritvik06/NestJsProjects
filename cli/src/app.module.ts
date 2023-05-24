import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CRUDCommands } from './commands/command';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CRUDCommands],
})
export class AppModule {}
