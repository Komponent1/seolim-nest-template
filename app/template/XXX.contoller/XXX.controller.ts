import { Controller } from '@nestjs/common';

@Controller('XXX')
export class XXXController {
  constructor /**
   * 주입받은 서비스 선언
   * EX>
   * private XXXReaderService: XXXReaderService,
   */() {}

  /**
   * 필요 API 선언
   * EX>
   * @Get()
   * async getXXX(@Param('uid') uid: string) ...
   */
}
