import prisma from "./prisma";
import Stripe from "stripe";

export class TransactionService {
  static async createTransaction(data: any) {
    return prisma.transaction.create({ data });
  }
}
