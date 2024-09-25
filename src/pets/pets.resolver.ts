import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';
import { CreatePetInput } from './dto/create-pet.input';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private readonly petService: PetsService) {}

  @Query((returns) => [Pet], { name: 'pets' })
  async findMany(): Promise<Pet[]> {
    return await this.petService.findMany();
  }

  @Mutation((returns) => Pet, { name: 'pet' })
  async create(@Args('createInput') createInput: CreatePetInput): Promise<Pet> {
    return await this.petService.create(createInput);
  }
}
