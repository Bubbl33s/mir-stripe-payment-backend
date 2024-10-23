import { Router } from "express";
import { TransactionController } from "../controller/transaction.controller";
import { validateTransaction } from "../middlewares/validations";

const router = Router();

router.post(
  `/create-payment-intent`,
  validateTransaction,
  TransactionController.createPaymentIntent,
);

export default router;
