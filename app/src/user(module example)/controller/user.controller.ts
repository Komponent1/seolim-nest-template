import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserReaderService } from '../service/user.reader.service';
import { UserWriterService } from '../service/user.writer.service';
import {
  UserAlreadyExistsError,
  UserNotFoundError,
} from '../exception/user.exception';
import { UserResponse } from '../dto/user.dto';

@Controller('user')
export class UserController {
  constructor(
    private userReaderService: UserReaderService,
    private userWriterService: UserWriterService
  ) {}

  @Get(':uid')
  async getUser(@Param('uid') uid: string): Promise<UserResponse | undefined> {
    try {
      const user = await this.userReaderService.getUser(uid);
      return user;
    } catch (err) {
      throw new UserNotFoundError(err);
    }
  }

  @Post()
  async createUser(@Body() body): Promise<UserResponse> {
    try {
      const user = await this.userWriterService.createUser(body.email);
      return user;
    } catch (err) {
      throw new UserAlreadyExistsError(err);
    }
  }
}
