/* eslint-disable @typescript-eslint/no-require-imports */
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function genController(name, dir) {
  const controllerTemplate = fs.readFileSync(
    `${__dirname}/XXX.module/controller/XXX.controller.ts`,
    'utf8'
  );
  const newController = controllerTemplate.replace(/XXX/g, name);
  if (dir) {
    fs.mkdirSync(`${dir}/controller`);
    fs.writeFileSync(`${dir}/controller/${name}.controller.ts`, newController);
  } else {
    fs.writeFileSync(`${name}.controller.ts`, newController);
  }
}
function genReaderService(name, dir) {
  const readerServiceTemplate = fs.readFileSync(
    `${__dirname}/XXX.module/service/XXX.reader.service.ts`,
    'utf8'
  );
  const newReaderService = readerServiceTemplate.replace(/XXX/g, name);
  if (dir) {
    fs.mkdirSync(`${dir}/service`);
    fs.writeFileSync(
      `${dir}/service/${name}.reader.service.ts`,
      newReaderService
    );
  } else {
    fs.writeFileSync(`${name}.reader.service.ts`, newReaderService);
  }
}
function genWriterService(name, dir) {
  const writerServiceTemplate = fs.readFileSync(
    `${__dirname}/XXX.module/service/XXX.writer.service.ts`,
    'utf8'
  );
  const newWriterService = writerServiceTemplate.replace(/XXX/g, name);
  if (dir) {
    fs.writeFileSync(
      `${dir}/service/${name}.writer.service.ts`,
      newWriterService
    );
  } else {
    fs.writeFileSync(`${name}.writer.service.ts`, newWriterService);
  }
}
function genService(name) {
  const serviceTemplate = fs.readFileSync(
    `${__dirname}/XXX.service/XXX.service.ts`,
    'utf8'
  );
  const newService = serviceTemplate.replace(/XXX/g, name);
  fs.writeFileSync(`${name}.service.ts`, newService);
}
function genEntity(name, dir) {
  const entityTemplate = fs.readFileSync(
    `${__dirname}/XXX.module/entity/XXX.entity.ts`,
    'utf8'
  );
  const newEntity = entityTemplate.replace(/XXX/g, name);
  if (dir) {
    fs.mkdirSync(`${dir}/entity`);
    fs.writeFileSync(`${dir}/entity/${name}.entity.ts`, newEntity);
  } else {
    fs.writeFileSync(`${name}.entity.ts`, newEntity);
  }
}
function genDto(name, dir) {
  const dtoTemplate = fs.readFileSync(
    `${__dirname}/XXX.module/dto/XXX.dto.ts`,
    'utf8'
  );
  const newDto = dtoTemplate.replace(/XXX/g, name);
  if (dir) {
    fs.mkdirSync(`${dir}/dto`);
    fs.writeFileSync(`${dir}/dto/${name}.dto.ts`, newDto);
  } else {
    fs.writeFileSync(`${name}.dto.ts`, newDto);
  }
}
function genException(name, dir) {
  const exceptionTemplate = fs.readFileSync(
    `${__dirname}/XXX.module/exception/XXX.exception.ts`,
    'utf8'
  );
  const newException = exceptionTemplate.replace(/XXX/g, name);
  if (dir) {
    fs.mkdirSync(`${dir}/exception`);
    fs.writeFileSync(`${dir}/exception/${name}.exception.ts`, newException);
  } else {
    fs.writeFileSync(`${name}.exception.ts`, newException);
  }
}

function genModule(name) {
  const pwd = process.cwd();
  const moduleTemplate = fs.readFileSync(
    `${__dirname}/XXX.module/XXX.module.ts`,
    'utf8'
  );
  const enumTemplate = fs.readFileSync(
    `${__dirname}/XXX.module/XXX.enum.ts`,
    'utf8'
  );
  const constantTamplate = fs.readFileSync(
    `${__dirname}/XXX.module/XXX.constant.ts`,
    'utf8'
  );

  const newModule = moduleTemplate.replace(/XXX/g, name);
  const newEnum = enumTemplate.replace(/XXX/g, name);
  const newConstant = constantTamplate.replace(/XXX/g, name);

  fs.mkdirSync(`${pwd}/${name}`);
  fs.writeFileSync(`${pwd}/${name}/${name}.module.ts`, newModule);
  fs.writeFileSync(`${pwd}/${name}/${name}.enum.ts`, newEnum);
  fs.writeFileSync(`${pwd}/${name}/${name}.constant.ts`, newConstant);

  genController(name, `${pwd}/${name}`);
  genReaderService(name, `${pwd}/${name}`);
  genWriterService(name, `${pwd}/${name}`);
  genEntity(name, `${pwd}/${name}`);
  genDto(name, `${pwd}/${name}`);
  genException(name, `${pwd}/${name}`);

  console.log('모듈이 생성되었습니다.');
  rl.close();
}

rl.question(
  '생성할 프로세스를 입력하세요\n\t1. module\n\t2. cotroller\n\t3. service\n',
  num => {
    if (num === '1') {
      rl.question('생성할 모듈이름을 입력하세요\n', name => {
        genModule(name);
        rl.close();
      });
    } else if (num === '2') {
      rl.question('생성할 컨트롤러이름을 입력하세요\n', name => {
        genController(name, undefined);
        rl.close();
      });
    } else if (num === '3') {
      rl.question('생성할 서비스이름을 입력하세요\n', name => {
        genService(name);
        rl.close();
      });
    } else {
      console.log('잘못된 입력입니다.');
      rl.close();
    }
  }
);
