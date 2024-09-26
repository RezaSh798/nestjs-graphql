import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { OwnersService } from '../owners/owners.service';
import { Owner } from '../owners/entities/owner.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private readonly petRepository: Repository<Pet>,
    private readonly ownersService: OwnersService,
  ) {}

  async findOne(id: number): Promise<Pet> {
    return await this.petRepository.findOneByOrFail({ id });
  }

  async findMany(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  async create(createInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petRepository.create(createInput);
    return await this.petRepository.save(newPet);
  }

  async findOwner(ownerId: number): Promise<Owner> {
    return await this.ownersService.findOne(ownerId);
  }
}
