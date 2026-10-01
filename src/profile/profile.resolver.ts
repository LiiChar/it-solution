import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Profile } from './models/profile.model.js';
import { ProfileService } from './profile.service.js';
import { CreateProfileInput } from './dto/create-profile.input.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(
    private readonly profileService: ProfileService,
  ) {}

  @Query(() => Profile)
  profile() {
    return this.profileService.findProfile();
  }

  @Mutation(() => Profile)
  createProfile(@Args('input') input: CreateProfileInput,) {
    return this.profileService.createProfile(input);
  }
}
