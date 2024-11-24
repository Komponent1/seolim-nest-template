import { Injectable } from '@nestjs/common';
import { Config } from './config.type';

@Injectable()
export class ConfigService {
  private config: Config;
  constructor(config: Config) {
    this.config = config;
  }

  public getConfig(): Config {
    return this.config;
  }
  /**
   * 각 module에 맞는 config 반환 함수 작성
   * EX>
   * public getIORedisReadConfig(): IORedisConfigType {
   *    return {
   *    host: this.config.REDIS_READ_HOST,
   *    port: this.config.REDIS_PORT,
   *    db: this.config.REDIS_DB,
   *    isCluster: this.config.REDIS_IS_CLUSTER,
   *    commandTimeout: this.config.REDIS_COMMAND_TIMEOUT,
   *   };
   * }
   */

  public static LoadFromEnv(): ConfigService {
    const config = process.env as unknown as Config;
    return new ConfigService(config);
  }
}
