import { Injectable, NotFoundException, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './task.status.enum';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTaskFilterDTO } from './dto/get-task-filter.dto';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';

@Injectable()
export class TaskService {

  constructor (@InjectRepository(TaskRepository)
  private taskRepository: TaskRepository) {

  }
  // private tasks: Task[] = [
  //   {
  //     "id": "980a2b00-0ac4-4d98-87b7-625d3f8d2d53",
  //     "title": "go to bed",
  //     "description": "need to rejuvenate",
  //     "status": TaskStatus.OPEN,
  //     "deleted": false
  //   },
  //   {
  //     "id": "63d7fd82-3771-429a-92d8-3e3ba445f662",
  //     "title": "poem",
  //     "description": "write a poem",
  //     "status": TaskStatus.OPEN,
  //     "deleted": false
  //   },
  //   {
  //     "id": "20a3de21-8a3f-434a-a33a-7a0d94590f44",
  //     "title": "Bob",
  //     "description": "feed the dog",
  //     "status": TaskStatus.OPEN,
  //     "deleted": false
  //   },
  //   {
  //     "id": "78016557-c145-49e4-97bf-a187968f3486",
  //     "title": "Meeting",
  //     "description": "Wake up early for stand up meeting",
  //     "status": TaskStatus.OPEN,
  //     "deleted": false
  //   }
  // ];
  // getTasks(filterDTO: GetTaskFilterDTO): Task[] {
  //   let tasks = [];
  //   if (filterDTO.status) {
  //     tasks = this.tasks.filter((task) => task.status === filterDTO.status);
  //   } else if (filterDTO.search) {
  //     tasks = this.tasks.filter((task) => {
  //       if (task.description.includes(filterDTO.search) || task.title.includes(filterDTO.search)) {
  //         return true;
  //       }
  //       return false;
  //     })
  //   } else {
  //     tasks = this.tasks;
  //   }
    
  //   if (!tasks) {
  //     throw new NotFoundException("No tasks found");
  //   }
  //   return tasks;
  // }

  async getByTaskId(id: string): Promise<Task> {
    const task = await this.taskRepository.findOne({ id });
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`)
    }
    return task;
  }

  // createTask(task: CreateTaskDTO): Task {
  //   const newTask = {
  //     id: uuid(),
  //     ...task,
  //     status: TaskStatus.OPEN,
  //     deleted: false
  //   };
  //   this.tasks.push(newTask);
  //   return newTask;
  // }

  // updateTaskField(
  //   taskId: string,
  //   field: string,
  //   updateTaskDTO: UpdateTaskDTO,
  // ): Task {
  //   const task = this.getByTaskId(taskId);
  //   task[field] = updateTaskDTO[field];
  //   return task;
  // }

  // updateTaskStatus(taskId: string, status: TaskStatus): Task {
  //   const task = this.getByTaskId(taskId);
  //   task.status = status;
  //   return task;
  // }

  // deleteTaskById(taskId: string): boolean {
  //   const task = this.getByTaskId(taskId);
  //   // this.tasks = this.tasks.filter((task) => task.id !== taskId);
  //   task.deleted = true;
  //   return task ? true : false;
  // }
}
