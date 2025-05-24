import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './database/database.provider';
import { TaskController } from './task/task.controller';

@Module({
  imports: [],
  controllers: [AppController, TaskController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule { }
