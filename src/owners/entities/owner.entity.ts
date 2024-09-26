/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Pet } from '../../pets/pet.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Pet, (pet) => pet.owner)
  @Field((type) => Pet)
  pets?: Pet[];
}
