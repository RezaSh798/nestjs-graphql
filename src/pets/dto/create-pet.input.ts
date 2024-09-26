/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreatePetInput {
  @Field()
  @IsAlpha()
  name: string;

  @IsNumber()
  @Field((type) => Int)
  ownerId: number;

  @Field({ nullable: true })
  // @IsString()
  type?: string;
}
