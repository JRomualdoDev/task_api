import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateTaskDto } from "./DTO/create-task.dto";
import { Task } from "./task.interface";
import { TaskService } from "./task.service";
import { UpdateTaskDto } from "./DTO/update-task.dto";

@Controller("task")
export class TaskController {

    constructor(private taskService: TaskService) { }

    @Get()
    findAll(): Promise<Task[]> {
        return this.taskService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.taskService.findOne(id);
    }

    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.create(createTaskDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Promise<Task> {
        return this.taskService.update(id, updateTaskDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.taskService.delete(id);
    }

}
