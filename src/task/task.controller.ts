import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateTaskDto } from "./DTO/create-task.dto";
import { Task } from "./task.interface";
import { TaskService } from "./task.service";

@Controller("task")
export class TaskController {

    constructor(private taskService: TaskService) { }

    @Get()
    findAll(): Promise<Task[]> {
        return this.taskService.findAll();
    }

    @Get()
    findOne(@Param('id') id: string) {
        return "Find One";
    }

    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.create(createTaskDto);
    }

    @Put()
    edit(): string {
        return "Edit Task";
    }

    @Delete()
    remove(@Param('id') id: string) {
        return "Delete Task";
    }

}
