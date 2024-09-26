import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { PetsService } from '../pets/pets.service';
import { Pet } from '../pets/pet.entity';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: Repository<Owner>,
    // private readonly petsService: PetsService,
  ) {}

  async findOne(id: number): Promise<Owner> {
    return await this.ownerRepository.findOneByOrFail({ id });
  }

  async findMany(): Promise<Owner[]> {
    return await this.ownerRepository.find();
  }

  async create(createInput: CreateOwnerInput): Promise<Owner> {
    const newOwner: Owner = this.ownerRepository.create(createInput);
    return await this.ownerRepository.save(newOwner);
  }

  // async findPets(owner: Owner): Promise<Pet[]> {
  //   return await this.petsService.findMany();
  // }
}
