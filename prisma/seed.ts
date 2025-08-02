import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Create Status entries
  const statuses = ["In Progress", "Completed", "Hiatus", "Stopped"];
  for (const name of statuses) {
    await prisma.status.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  // Create a user
  const user = await prisma.user.create({
    data: {
      email: "demo@example.com",
      name: "Demo User",
    },
  });

  // Create a manga series
  const status = await prisma.status.findFirst({ where: { name: "Completed" } });

  const mangaSeries = await prisma.mangaSeries.create({
    data: {
      title: "Jujutsu Kaisen",
      author: "Gege Akutami",
      illustrator: "Gege Akutami",
      statusId: status!.id,
    },
  });

  // Add volume to the series
  await prisma.mangaVolume.createMany({
    data: [
        {
            number: 1,
            title: "Ryomen Sukunua",
            pubDate: new Date("2018-07-04"),
            seriesId: mangaSeries.id,
        },
        {
            number: 2,
            title: "Fearsome Womb",
            pubDate: new Date("2018-09-04"),
            seriesId: mangaSeries.id,
        },
    ],
  });

  // Add a post
  await prisma.post.create({
    data: {
      title: "My first post",
      content: "This is an example post.",
      authorId: user.id,
      published: true,
    },
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
