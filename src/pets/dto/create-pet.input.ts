import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha, IsString } from 'class-validator';

@InputType()
export class CreatePetInput {
  @Field()
  @IsAlpha()
  name: string;

  @Field({ nullable: true })
  @IsString()
  type?: string;
}
