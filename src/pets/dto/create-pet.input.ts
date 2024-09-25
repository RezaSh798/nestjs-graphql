import { Field, InputType } from '@nestjs/graphql';
import { IsEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePetInput {
  @Field()
  @IsString()
  @IsEmpty()
  name: string;

  @Field({ nullable: true })
  @IsString()
  type?: string;
}
