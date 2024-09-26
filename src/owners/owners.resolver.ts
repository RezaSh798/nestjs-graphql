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
import { Owner } from './entities/owner.entity';
import { OwnersService } from './owners.service';
import { CreateOwnerInput } from './dto/create-owner.input';
import { Pet } from '../pets/pet.entity';

@Resolver((of) => Owner)
export class OwnersResolver {
  constructor(private readonly ownersService: OwnersService) {}

  @Query((returns) => Owner, { name: 'owner' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<Owner> {
    return await this.ownersService.findOne(id);
  }

  @Query((returns) => [Owner], { name: 'owners' })
  async findMany(): Promise<Owner[]> {
    return await this.ownersService.findMany();
  }

  @Mutation((returns) => Owner, { name: 'owner' })
  async create(
    @Args('createInput') createInput: CreateOwnerInput,
  ): Promise<Owner> {
    return await this.ownersService.create(createInput);
  }

  // @ResolveField((returns) => Pet, { name: 'pets' })
  // async findPets(@Parent() owner: Owner): Promise<Pet[]> {
  //   return await this.ownersService.findPets(owner);
  // }
}
