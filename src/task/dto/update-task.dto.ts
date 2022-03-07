import { TaskStatus } from '../task.status.enum';
import { IsEnum } from 'class-validator';

export class UpdateTaskDTO {
  title: string;
  description: string;
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
