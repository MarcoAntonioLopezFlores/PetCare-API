import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class ReadUserDto {
  @IsNumber()
  readonly id: number;

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly lastname: string;

  @IsEmail()
  readonly email: string;
}
