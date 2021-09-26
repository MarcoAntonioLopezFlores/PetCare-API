import { IsNumber, IsString, MaxLength } from 'class-validator';
export class CreatePetDto {
  @IsString()
  @MaxLength(50, { message: 'This name is not valid' })
  readonly name: string;

  @IsString()
  @MaxLength(50, { message: 'This breed is not valid' })
  breed: string;

  @IsString()
  photo: string;

  @IsNumber()
  age: number;

  weight: number;

  @IsString()
  @MaxLength(50, { message: 'This growth is not valid' })
  growth: string;

  @IsNumber()
  @MaxLength(50, { message: 'This color is not valid' })
  color: string;

  @IsNumber()
  @MaxLength(50, { message: 'This temperament is not valid' })
  temperament: string;
}
