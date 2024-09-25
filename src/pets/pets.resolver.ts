import { Query, Resolver } from '@nestjs/graphql';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private readonly petService: PetsService) {}

  @Query((returns) => [Pet], { name: 'pets' })
  async findMany(): Promise<Pet[]> {
    return await this.petService.findMany();
  }
}
