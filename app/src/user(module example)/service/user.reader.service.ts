import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserReaderService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async getUser(uid: string): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: { uid },
    });
  }
}
