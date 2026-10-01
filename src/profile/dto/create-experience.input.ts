import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateExperienceInput {
  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  startedAt: Date;

  @Field({ nullable: true })
  endedAt?: Date;

  @Field({ nullable: true })
  achievements?: string;
}
