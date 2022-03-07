import { EntityRepository, Repository } from "typeorm";
import { SearchQuery } from "./dto/get-user-filter.dto";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async getUsersByEmail(email: string): Promise<User[]> {
        return this.find({ email });
    }

    async searchUsers(search: SearchQuery): Promise<User[]> {
        return [];
    }

    async getAllUsers(): Promise<User[]> {
        return this.find();
    }

    async getUserById(id: string): Promise<User> {
        return this.findOne(id);
    }
}