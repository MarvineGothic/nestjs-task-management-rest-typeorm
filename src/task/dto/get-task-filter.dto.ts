import { TaskStatus } from '../task.status.enum';
import { IsOptional, IsNotEmpty, IsEnum } from 'class-validator';

export class GetTaskFilterDTO {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
  @IsOptional()
  @IsNotEmpty()
  search?: string;
}
