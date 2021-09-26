import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

@Exclude()
export class ReadUserDetailsDto {
  @Expose()
  @IsString()
  readonly name: string;
  @Expose()
  @IsString()
  readonly lastname: string;
  @Expose()
  @IsString()
  readonly phone: string;
  @Expose()
  @IsNumber()
  readonly age: number;
}
