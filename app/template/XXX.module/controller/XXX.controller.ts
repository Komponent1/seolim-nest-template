import { Body, Controller, Get, Post } from '@nestjs/common';
import { XXXReaderService } from '../service/XXX.reader.service';
import { XXXWriterService } from '../service/XXX.writer.service';
import { XXXResponse } from '../dto/XXX.dto';
import {
  XXXAlreadyExistsError,
  XXXNotFoundError,
} from '../exception/XXX.exception';

@Controller('XXX')
export class XXXController {
  constructor(
    private XXXReaderService: XXXReaderService,
    private XXXWriterService: XXXWriterService
  ) {}

  /**
   * 1. 인수 필요 시
   * @Get(':uid')
   * async getXXX(@Param('uid') uid: string) ...
   */
  @Get()
  async getXXX(): Promise<XXXResponse | undefined> {
    try {
      const XXX = await this.XXXReaderService.getXXX();
      return XXX;
    } catch (err) {
      throw new XXXNotFoundError(err);
    }
  }

  @Post()
  async createXXX(@Body() body): Promise<XXXResponse> {
    try {
      const XXX = await this.XXXWriterService.createXXX(body);
      return XXX;
    } catch (err) {
      throw new XXXAlreadyExistsError(err);
    }
  }
}
