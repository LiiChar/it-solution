import { Field, InputType } from "@nestjs/graphql";
import { CreateSkillInput } from "./create-skill.input.js";
import { CreateExperienceInput } from "./create-experience.input.js";
import { CreateProjectInput } from "./create-project.input.js";

@InputType()
export class CreateProfileInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  githubUrl?: string;

  @Field({ nullable: true })
  linkedinUrl?: string;

  @Field(() => [CreateSkillInput], { nullable: true })
  skills?: CreateSkillInput[];

  @Field(() => [CreateExperienceInput], { nullable: true })
  experiences?: CreateExperienceInput[];

  @Field(() => [CreateProjectInput], { nullable: true })
  projects?: CreateProjectInput[];
}
