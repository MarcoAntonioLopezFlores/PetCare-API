import { Type } from 'class-transformer';
import { ReadUserDetailsDto } from './read-user-details.dto';

export class UpdateUserDto {
  @Type(() => ReadUserDetailsDto)
  readonly details: ReadUserDetailsDto;
}
