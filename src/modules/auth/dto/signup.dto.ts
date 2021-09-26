import { IsNotEmpty, IsString } from 'class-validator';
import { Role } from 'src/modules/role/role.entity';

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  roles: Role[];
}
