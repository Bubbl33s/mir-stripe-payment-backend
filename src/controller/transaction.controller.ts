import { NextFunction, Request, Response } from "express";
import { TransactionService } from "../services/transaction.service";
import Stripe from "stripe";

export class TransactionController {
  private static stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-09-30.acacia",
  });

  static async createPaymentIntent(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { userId } = req.params;
      const { amount, currency } = req.body;

      const paymentIntent = await this.stripe.paymentIntents.create({
        amount,
        currency,
      });

      await TransactionService.createTransaction({
        amount,
        currency,
        userId,
      });

      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      next(error);
    }
  }
}
