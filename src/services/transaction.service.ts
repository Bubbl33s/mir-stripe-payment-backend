import prisma from "./prisma";

type CreateTransaction = {
  amount: number;
  currency: string;
  email: string;
};

export class TransactionService {
  static async createTransaction({
    amount,
    currency,
    email,
  }: CreateTransaction) {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error("User not found");
    }

    return prisma.transaction.create({
      data: {
        amount,
        currency,
        userId: user.id,
      },
    });
  }
}
