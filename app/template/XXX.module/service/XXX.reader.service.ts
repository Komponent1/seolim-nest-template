import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { XXX } from '../entity/XXX.entity';
import { Repository } from 'typeorm';
/**
 * 데이터 읽기 전용 service
 */
@Injectable()
export class XXXReaderService {
  constructor(@InjectRepository(XXX) private XXXRepository: Repository<XXX>) {}

  async getXXX(): Promise<XXX | undefined> {
    return await this.XXXRepository.findOne({});
  }
}
