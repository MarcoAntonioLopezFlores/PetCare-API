import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { CreatePetDto } from './dtos/create-pet.dto';
import { ReadPetDto } from './dtos/read-pet.dto';
import { Pet } from './pet.entity';
import { PetRepository } from './pet.repository';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(PetRepository)
    private readonly _petRepository: PetRepository,
  ) {}

  async get(petId: number): Promise<ReadPetDto> {
    if (!petId) {
      throw new BadRequestException('petId must be sent');
    }

    const pet: Pet = await this._petRepository.findOne(petId, {
      where: { status: true },
    });

    if (!pet) {
      throw new NotFoundException();
    }

    return plainToClass(ReadPetDto, pet);
  }

  async getAll(): Promise<ReadPetDto[]> {
    const pets: Pet[] = await this._petRepository.find({
      where: { status: true },
    });

    return pets.map((pet: Pet) => plainToClass(ReadPetDto, pet));
  }

  async update(petId: number, pet: Partial<CreatePetDto>): Promise<ReadPetDto> {
    const foundpet = await this._petRepository.findOne(petId, {
      where: { status: true },
    });

    if (!foundpet) {
      throw new NotFoundException('This pet does not exist');
    }

    const updatedpet = await this._petRepository.save(foundpet);

    return plainToClass(ReadPetDto, updatedpet);
  }

  async delete(petId: number): Promise<boolean> {
    const petExist = await this._petRepository.findOne(petId, {
      where: { status: true },
    });

    if (!petExist) {
      throw new NotFoundException();
    }

    await this._petRepository.update(petId, { status: false });

    return true;
  }
}
