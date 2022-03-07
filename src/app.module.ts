import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';

@Module({
  imports: [
    TaskModule,
    UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig)
  ],
})
export class AppModule { }
