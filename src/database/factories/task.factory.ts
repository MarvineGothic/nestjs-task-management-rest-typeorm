import { define } from 'typeorm-seeding';
import * as Faker from 'faker';

import { Task } from "../../task/task.entity";
import { TaskStatus } from '../../task/task.status.enum';

define(Task, (faker: typeof Faker) => {
  const task = new Task();
  task.title = faker.lorem.words(8);
  task.description = faker.lorem.paragraph(6);
  task.status = TaskStatus.OPEN;
  return task;
});