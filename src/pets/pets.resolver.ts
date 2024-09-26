/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';
import { CreatePetInput } from './dto/create-pet.input';
import { Owner } from '../owners/entities/owner.entity';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private readonly petService: PetsService) {}

  @Query((returns) => Pet, { name: 'pet' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return await this.petService.findOne(id);
  }

  @Query((returns) => [Pet], { name: 'pets' })
  async findMany(): Promise<Pet[]> {
    return await this.petService.findMany();
  }

  @Mutation((returns) => Pet, { name: 'pet' })
  async create(@Args('createInput') createInput: CreatePetInput): Promise<Pet> {
    return await this.petService.create(createInput);
  }

  @ResolveField((returns) => Owner, { name: 'owner' })
  async findOwner(@Parent() pet: Pet): Promise<Owner> {
    return await this.petService.findOwner(pet.ownerId);
  }
}
