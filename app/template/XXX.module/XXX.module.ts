import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { XXXReaderService } from './service/XXX.reader.service';
import { XXXWriterService } from './service/XXX.writer.service';
import { XXXController } from './controller/XXX.controller';

@Module({
  /** 필요 모듈 주입 */
  imports: [
    /** DB 연결 시 사용 */
    TypeOrmModule.forFeature([
      /** Entity 주입 */
    ]),
  ],
  /** 필요 의존성 주입 */
  providers: [XXXReaderService, XXXWriterService],
  /** 모듈 외부로 노출시킬 서비스 */
  exports: [TypeOrmModule, XXXReaderService, XXXWriterService],
  /** 요청 컨토롤러(API) */
  controllers: [XXXController],
})
export class XXXModule {}
