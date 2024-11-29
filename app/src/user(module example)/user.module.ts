import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserReaderService } from './service/user.reader.service';
import { UserWriterService } from './service/user.writer.service';
import { UserController } from './controller/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserReaderService, UserWriterService],
  exports: [TypeOrmModule, UserReaderService, UserWriterService],
  controllers: [UserController],
})
export class UserModule {}
