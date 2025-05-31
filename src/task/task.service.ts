import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './DTO/create-task.dto';
import { Model } from 'mongoose';
import { Task } from './task.interface';
import { UpdateTaskDto } from './DTO/update-task.dto';

@Injectable()
export class TaskService {
    constructor(
        @Inject('TASK_MODEL')
        private taskModel: Model<Task>,
    ) { }

    async findAll(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }

    async findOne(id: string): Promise<Task> {
        const findOneTask = await this.taskModel.findById(id);
        if (!findOneTask) {
            throw new Error('Task not found');
        }
        return findOneTask;
    }

    async create(createTaskDto: CreateTaskDto): Promise<Task> {
        const createTask = new this.taskModel(createTaskDto);
        return createTask.save();
    }

    async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
        const updatedTask = await this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true }).exec();
        if (!updatedTask) {
            throw new Error('Task not found');
        }
        return updatedTask;
    }

    async delete(id: string) {
        return this.taskModel.deleteOne({ _id: id });
    }
}
