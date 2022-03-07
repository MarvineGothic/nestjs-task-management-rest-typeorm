import * as Faker from "faker";
import { define } from "typeorm-seeding";

import { User } from "../../user/user.entity";

define(User, (faker: typeof Faker) => {
    const user = new User();
    user.name = faker.name.firstName() + faker.name.lastName();
    user.email = faker.internet.email();
    user.password = faker.internet.password();
    return user;
});