import { Router } from "express";
import { TransactionController } from "../controller/transaction.controller";

const router = Router();

router.post(
  `/create-payment-intent`,
  TransactionController.createPaymentIntent,
);

export default router;
