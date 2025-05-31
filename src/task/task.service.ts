import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './DTO/create-task.dto';
import { Model } from 'mongoose';
import { Task } from './task.interface';

@Injectable()
export class TaskService {
    constructor(
        @Inject('TASK_MODEL')
        private taskModel: Model<Task>,
    ) { }

    async create(createTaskDto: CreateTaskDto): Promise<Task> {
        const createTask = new this.taskModel(createTaskDto);
        return createTask.save();
    }

    async findAll(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }
}
