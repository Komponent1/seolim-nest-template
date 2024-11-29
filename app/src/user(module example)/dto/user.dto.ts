import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserResponse {
  @IsString() @IsNotEmpty() uid: string;
  @IsEmail() @IsNotEmpty() email: string;
  @IsString() @IsNotEmpty() name: string;
}
