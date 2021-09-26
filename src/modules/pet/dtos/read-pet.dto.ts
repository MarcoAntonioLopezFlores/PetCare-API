import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Exclude()
export class ReadPetDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsNotEmpty()
  photo: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  breed: string;

  @Expose()
  @IsString()
  age: number;

  @Expose()
  @IsNumber()
  weight: number;

  @Expose()
  @IsString()
  growth: string;

  @Expose()
  @IsString()
  color: string;

  @Expose()
  @IsString()
  temperament: string;
}
