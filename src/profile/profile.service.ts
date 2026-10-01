import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateProfileInput } from './dto/create-profile.input.js';

@Injectable()
export class ProfileService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async findProfile() {
    return this.prisma.profile.findFirst({
      include: {
        skills: true,
        experiences: true,
        projects: true,
      },
    });
  }

  async createProfile(input: CreateProfileInput) {
      return this.prisma.profile.create({
        data: {
          name: input.name,
          description: input.description,
          githubUrl: input.githubUrl,
          linkedinUrl: input.linkedinUrl,

          skills: input.skills
            ? {
                create: input.skills.map((skill) => ({
                  name: skill.name,
                })),
              }
            : undefined,

          experiences: input.experiences
            ? {
                create: input.experiences.map((experience) => ({
                  company: experience.company,
                  position: experience.position,
                  startedAt: experience.startedAt,
                  endedAt: experience.endedAt,
                  achievements: experience.achievements,
                })),
              }
            : undefined,

          projects: input.projects
            ? {
                create: input.projects.map((project) => ({
                  name: project.name,
                  url: project.url,
                  description: project.description,
                })),
              }
            : undefined,
        },

        include: {
          skills: true,
          experiences: true,
          projects: true,
        },
      });
    }
}
