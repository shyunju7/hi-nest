import { IsNumber, IsString } from 'class-validator';

// 데이터 전송 객체 - 코드를 더 간결하게 해주며, 쿼리에 대한 유효성처리가 가능하다.
export class CreateMovieDTO {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true }) // each : 모든 요소를 하나씩 검사함
  readonly genres: string[];
}

// class-validator : 클래스 유효성 검사
