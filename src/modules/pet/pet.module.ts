import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetController } from './pet.controller';
import { PetRepository } from './pet.repository';
import { PetService } from './pet.service';

@Module({
  imports: [TypeOrmModule.forFeature([PetRepository])],
  controllers: [PetController],
  providers: [PetService],
})
export class PetModule {}
