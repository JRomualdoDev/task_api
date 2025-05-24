import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateTaskDto } from "./DTO/create-task.dto";

@Controller("task")
export class TaskController {
    @Get()
    findAll(): string {
        return "Test findAll";
    }

    @Get()
    findOne(@Param('id') id: string) {
        return "Find One";
    }

    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
        return 'Create Task';
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
