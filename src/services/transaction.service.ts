import prisma from "./prisma";

type CreateTransaction = {
  amount: number;
  currency: string;
  userId: string;
};

export class TransactionService {
  static async createTransaction(data: CreateTransaction) {
    return prisma.transaction.create({ data });
  }
}
