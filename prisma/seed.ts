import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.js";
import { profileData } from "./data/profile.data.js";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const profile = await prisma.profile.upsert({
    where: {
      name: profileData.name,
    },

    update: {
      description: profileData.description,
      githubUrl: profileData.githubUrl,
      linkedinUrl: profileData.linkedinUrl,
    },

    create: {
      name: profileData.name,
      description: profileData.description,
      githubUrl: profileData.githubUrl,
      linkedinUrl: profileData.linkedinUrl,

      skills: {
        create: profileData.skills.map((name) => ({
          name,
        })),
      },

      experiences: {
        create: profileData.experiences,
      },

      projects: {
        create: profileData.projects,
      },
    },
  });

  return profile;
}
main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
