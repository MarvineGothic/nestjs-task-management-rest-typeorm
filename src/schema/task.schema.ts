import { BaseColumnSchemaPart } from "./base_column.schema";
import {EntitySchema} from "typeorm";
import { TaskStatus } from "../task/task.status.enum";

export const TaskEntity = new EntitySchema({
    name: "task",
    columns: {
        ...BaseColumnSchemaPart,
        title: {
            type: 'varchar'
        },
        description: {
            type: 'text',
            nullable: true
        },
        status: {
            type: 'enum',
            enum: TaskStatus,
            default: TaskStatus.OPEN
        }
    },
    relations: {
    }
});