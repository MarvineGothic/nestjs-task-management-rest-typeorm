import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { GetUserFilterDTO } from './dto/get-user-filter.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers(@Query() userFilter: GetUserFilterDTO): Promise<User[]> {
    return await this.userService.getAllUsers(userFilter);
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return await this.userService.getUserById(id);
  }

  // @Post()
  // createUser(@Body() createUserDTO: CreateUserDTO): User {
  //   return this.userService.createUser(createUserDTO);
  // }
}
