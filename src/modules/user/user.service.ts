import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { RoleRepository } from '../role/role.repository';
import { status } from '../../shared/entity-status.enum';
import { ReadUserDto, UpdateUserDto } from './dtos';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly _userRepository: UserRepository,
    @InjectRepository(RoleRepository)
    private readonly _roleRepository: RoleRepository,
  ) {}

  async get(userId: number): Promise<ReadUserDto> {
    if (!userId) {
      throw new BadRequestException('userId must be sent');
    }

    const user: User = await this._userRepository.findOne(userId, {
      where: { status: status.ACTIVE },
    });

    if (!user) {
      throw new NotFoundException();
    }

    return plainToClass(ReadUserDto, user);
  }

  async getAll(): Promise<ReadUserDto[]> {
    const users: User[] = await this._userRepository.find({
      where: { status: status.ACTIVE },
    });

    return users.map((user: User) => plainToClass(ReadUserDto, user));
  }

  async update(userId: number, user: UpdateUserDto): Promise<ReadUserDto> {
    const foundUser = await this._userRepository.findOne(userId, {
      where: { status: status.ACTIVE },
    });

    if (!foundUser) {
      throw new NotFoundException('This user does not exist');
    }

    foundUser.details.age = user.details.age;
    foundUser.details.lastname = user.details.lastname;
    foundUser.details.name = user.details.name;
    foundUser.details.phone = user.details.phone;
    const updatedUser = await this._userRepository.save(foundUser);

    return plainToClass(ReadUserDto, updatedUser);
  }

  async delete(userId: number): Promise<boolean> {
    const userExist = await this._userRepository.findOne(userId, {
      where: { status: status.ACTIVE },
    });

    if (!userExist) {
      throw new NotFoundException();
    }

    await this._userRepository.update(userId, { status: status.INACTIVE });

    return true;
  }

  async setRoleToUser(
    useruserId: number,
    roleuserId: number,
  ): Promise<boolean> {
    const userExist = await this._userRepository.findOne(useruserId, {
      where: { status: status.ACTIVE },
    });

    if (!userExist) {
      throw new NotFoundException();
    }

    const roleExist = await this._roleRepository.findOne(roleuserId, {
      where: { status: status.ACTIVE },
    });

    if (!roleExist) {
      throw new NotFoundException('Role does not exist');
    }

    userExist.roles.push(roleExist);
    await this._userRepository.save(userExist);

    return true;
  }
}
