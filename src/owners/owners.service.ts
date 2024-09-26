import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: Repository<Owner>,
  ) {}

  async findOne(id: number): Promise<Owner> {
    return await this.ownerRepository.findOneByOrFail({ id });
  }

  async findMany(): Promise<Owner[]> {
    return await this.ownerRepository.find();
  }
}
