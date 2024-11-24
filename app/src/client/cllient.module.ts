import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
/**
 * 외부 클라이언트 연결을 위한 모듈
 * EX> SMS, Redis, Push...
 */
@Module({
  imports: [ConfigModule],
  providers: [],
  exports: [],
})
export class ClientModule {}
