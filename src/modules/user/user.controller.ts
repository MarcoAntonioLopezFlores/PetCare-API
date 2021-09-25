import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get(':id')
  async getUser(@Param() id: number) {
    const user = await this._userService.get(id);
    return user;
  }

  @Get()
  async getUsers() {
    const users = await this._userService.getAll();
    return users;
  }

  @Post('create')
  async createUser(@Body() user: User): Promise<UserDto> {
    const createdUser = await this._userService.create(user);
    return createdUser;
  }

  @Patch(':id')
  async updatedUser(@Param() id: number, @Body() user: User): Promise<void> {
    await this._userService.update(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param() id: number) {
    await this._userService.delte(id);
    return true;
  }
}
