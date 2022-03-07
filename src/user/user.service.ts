import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { v4 as uuid } from 'uuid';
import { CreateUserDTO } from './dto/create-user.dto';
import { GetUserFilterDTO } from './dto/get-user-filter.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
  }

  // private users: User[] = [
  //   {
  //     id: 'ed8e54b0-88b8-44c9-b146-e12e7f696339',
  //     name: 'John Doe',
  //     email: 'johndoe@mail.com',
  //     password: 's9d8f79s8df79sdf',
  //   },
  //   {
  //     id: '4dcce9d9-7063-4d78-8f35-bdace228c025',
  //     name: 'John Moe',
  //     email: 'johnmoe@mail.com',
  //     password: 's9ds876df9sdf',
  //   },
  //   {
  //     id: '96aaff6e-1163-4d28-9455-41f9f49cada2',
  //     name: 'Allan Poe',
  //     email: 'allanpoe@mail.com',
  //     password: 'sdf768sdfsdf',
  //   },
  // ];
  async getAllUsers(userFilter: GetUserFilterDTO): Promise<User[]> {
    if (userFilter.email) {
      return await this.userRepository.getUsersByEmail(userFilter.email);
    } else if (userFilter.search) {
      return this.userRepository.searchUsers(userFilter.search);
    }
    return this.userRepository.getAllUsers();
  }
  // async getAllUsers(userFilter: GetUserFilterDTO): Promise<User[]> | User[] {
  //   if (userFilter.email) {
  //     return await this.userRepository.getUserByEmail(userFilter.email);
  //   } else if (userFilter.search) {
  //     return this.users.filter((user) => {
  //       if (
  //         user.name.includes(userFilter.search) ||
  //         user.email.includes(userFilter.search)
  //       ) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   return this.users;
  // }

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.getUserById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  //   createUser(createUserDTO: CreateUserDTO): User {
  //     const user: User = {
  //       id: uuid(),
  //       ...createUserDTO,
  //     };

  //     this.users.push(user);
  //     return user;
  //   }
}
