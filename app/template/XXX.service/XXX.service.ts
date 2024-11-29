import { Injectable } from '@nestjs/common';

@Injectable()
export class XXXService {
  constructor() /**
   * 필요 시 주입받을 repository(typeorm) 선언
   * EX>
   * private datasource: DataSource,
   * @InjectRepository(XXX) private XXXRepository: Repository<XXX>
   */ {}
}
