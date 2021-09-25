import { RoleType } from '../role/roletype.enum';

export interface IJwtPayload {
  id: number;
  name: string;
  lastname: string;
  email: string;
  roles: RoleType[];
  iat?: Date;
}
