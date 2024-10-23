import prisma from "./prisma";

type CreateUser = {
  email: string;
  name?: string;
};

export class UserService {
  static async getUsers() {
    return prisma.user.findMany({ include: { transactions: true } });
  }

  static async getUserById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      include: { transactions: true },
    });
  }

  static async createUser(data: CreateUser) {
    const userExists = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new Error("User with email already exists");
    }

    return prisma.user.create({ data });
  }
}
