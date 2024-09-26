/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Owner } from './entities/owner.entity';
import { OwnersService } from './owners.service';

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
}
