import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../role/decorators/role.decorator';
import { RoleGuard } from '../role/guards/role.guard';
import { RoleType } from '../role/roletype.enum';
import { ReadUserDto, UpdateUserDto } from './dtos';
import { UserService } from './user.service';

@Controller('users')
//Protege con jwt todo el controlador
//@UseGuards(AuthGuard())
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get(':userId')
  //@Roles(RoleType.ADMIN, RoleType.GENERAL)
  //@UseGuards(AuthGuard(), RoleGuard)
  getUser(@Param('userId', ParseIntPipe) userId: number): Promise<ReadUserDto> {
    return this._userService.get(userId);
  }

  @Get()
  getUsers(): Promise<ReadUserDto[]> {
    return this._userService.getAll();
  }

  @Patch(':userId')
  updatedUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() user: UpdateUserDto,
  ): Promise<ReadUserDto> {
    return this._userService.update(userId, user);
  }

  @Delete(':userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number): Promise<boolean> {
    return this._userService.delete(userId);
  }

  @Post('setRole/:useruserId/:roleuserId')
  setRoleToUser(
    @Param('useruserId', ParseIntPipe) useruserId: number,
    @Param('roleuserId', ParseIntPipe) roleuserId: number,
  ): Promise<boolean> {
    return this._userService.setRoleToUser(useruserId, roleuserId);
  }
}
