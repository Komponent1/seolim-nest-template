import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserWriterService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async createUser(param: Partial<User>): Promise<User> {
    const user = User.from(param);

    const querryRunner = this.dataSource.createQueryRunner();

    await querryRunner.connect();
    await querryRunner.startTransaction();

    try {
      await querryRunner.manager.insert(User, user);
    } catch (err) {
      await querryRunner.rollbackTransaction();
      throw err;
    } finally {
      await querryRunner.release();
    }

    return user;
  }
}
