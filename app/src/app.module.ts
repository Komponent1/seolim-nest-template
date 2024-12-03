import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (service: ConfigService) => service.getTypeOrmConfig({ entities: ['dist/**/*.entity{.ts,.js}'] }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
