const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      id: "aryan123",
      email: "aryan@example.com",
      password: await bcrypt.hash("dummy123", 10),
      firstName: "Aryan",
      lastName: "Singh",
      role: "APPROVER",
    },
    {
      id: "kshitish123",
      email: "kshitish@example.com",
      password: await bcrypt.hash("dummy123", 10),
      firstName: "Kshitish",
      lastName: "Sharma",
      role: "APPROVER",
    },
    {
      id: "abhivan123",
      email: "abhivan@example.com",
      password: await bcrypt.hash("dummy123", 10),
      firstName: "Abhivan",
      lastName: "Kumar",
      role: "APPROVER",
    },
    {
      id: "initiator01",
      email: "init@example.com",
      password: await bcrypt.hash("dummy123", 10),
      firstName: "Initiator",
      lastName: "User",
      role: "INITIATOR",
    },
  ];

  await prisma.user.createMany({ data: users });
  console.log("✅ Dummy users inserted");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());


