# Directory & file 설명
 
**controller** API 레벨 선언

**dto** 타입 선언, 통상 paramter나 response data type 선언

**entity** DB entity 선언, 테이블 단위

**exception** 에러 객체 선언, 통상 controller 단위로 모음

**service** 로직 레벨 선언

- `XXX.reader.service`, `XXX.writer.service`는 각각 DB/캐시에서 값을 읽고 쓰는 목적으로 orm과 연결된 모든 module에 선언한다.

**constant.ts** 상수 선언

**enum.ts** enum 값 선언

**module.ts** export 모듈 선언
