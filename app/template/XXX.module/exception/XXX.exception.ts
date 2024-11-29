/**
 * Response 내 에러 선언
 * 아래 선언은 예시중 하나
 */
import { HttpException, HttpStatus, NotFoundException } from '@nestjs/common';

export class XXXNotFoundError extends NotFoundException {
  constructor(err: any) {
    super(err.message);
  }
}

export class XXXAlreadyExistsError extends HttpException {
  constructor(err: any) {
    super(err.message, HttpStatus.BAD_REQUEST);
  }
}
