import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTaskFilterDTO } from './dto/get-task-filter.dto';
import { UpdateTaskStatusDTO } from './dto/update-task-status.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { TaskStatus } from './task.status.enum';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('/tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  // @Get()
  // getTasks(@Query() filterDTO: GetTaskFilterDTO): Task[] {
  //   return this.taskService.getTasks(filterDTO);
  // }

  @Get('/:id')
  getTaskById(@Param('id') taskId: string): Promise<Task> {
    return this.taskService.getByTaskId(taskId);
  }

  // @Post()
  // createTask(@Body() createTaskDTO: CreateTaskDTO): Task {
  //   return this.taskService.createTask(createTaskDTO);
  // }

  // @Patch('/:id/:field')
  // updateTaskField(
  //   @Param('id') taskId: string,
  //   @Param('field') taskField: string,
  //   @Body() updateTaskDTO: UpdateTaskDTO,
  // ) {
  //   return this.taskService.updateTaskField(taskId, taskField, updateTaskDTO);
  // }

  // @Patch('/:id/status')
  // updateStatus(
  //   @Param('id') taskId: string,
  //   @Body() updateTaskStatus: UpdateTaskStatusDTO,
  // ) {
  //   const { status } = updateTaskStatus;
  //   return this.taskService.updateTaskStatus(taskId, status);
  // }

  // @Delete('/:id')
  // deleteTask(@Param('id') taskId: string) {
  //   return this.taskService.deleteTaskById(taskId) ? 200 : 204;
  // }
}
