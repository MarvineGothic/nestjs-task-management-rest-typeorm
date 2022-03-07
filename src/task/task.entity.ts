import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne
} from 'typeorm';
import { User } from '../user/user.entity';
import { TaskStatus } from './task.status.enum';

@Entity('tasks')
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id!: string
    @Column()
    title!: string
    @Column({
        type: 'text',
        nullable: true
    })
    description?: string
    @Column({
        type: "enum",
        enum: TaskStatus,
        default: TaskStatus.OPEN
    })
    status!: TaskStatus
    
    @ManyToOne(() => User, (user) => user.tasks)
    user!: User;

}