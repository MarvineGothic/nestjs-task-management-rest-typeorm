import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Task } from '../../task/task.entity';
import { User } from '../../user/user.entity';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const users = await factory(User)().createMany(10);

    await factory(Task)()
      .map(async (task) => {
        task.user = users[Math.floor(Math.random() * users.length)];
        return task;
      })
      .createMany(50);
  }
}