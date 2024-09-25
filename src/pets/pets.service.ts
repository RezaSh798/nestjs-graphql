import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private readonly petRepository: Repository<Pet>,
  ) {}

  async findMany(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  async create(createInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petRepository.create(createInput);
    return await this.petRepository.save(newPet);
  }
}
