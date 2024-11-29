import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { XXX } from '../entity/XXX.entity';
import { InjectRepository } from '@nestjs/typeorm';
/**
 * 데이터 쓰기 전용 service
 */
@Injectable()
export class XXXWriterService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(XXX) private XXXRepository: Repository<XXX>
  ) {}

  async createXXX(param: Partial<XXX>): Promise<XXX> {
    const newEntity = XXX.from(param);

    const querryRunner = this.dataSource.createQueryRunner();

    await querryRunner.connect();
    await querryRunner.startTransaction();

    try {
      await querryRunner.manager.insert(XXX, newEntity);
    } catch (err) {
      await querryRunner.rollbackTransaction();
      throw err;
    } finally {
      await querryRunner.release();
    }

    return newEntity;
  }
}
