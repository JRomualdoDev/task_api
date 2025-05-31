import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './database/database.providers';
import { TaskController } from './task/task.controller';
import { DatabaseModule } from './database/database.module';
import { taskProviders } from './task/task.providers';
import { TaskService } from './task/task.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, TaskController],
  providers: [AppService, ...databaseProviders, ...taskProviders, TaskService],
})
export class AppModule { }
