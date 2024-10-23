import { Request, Response, NextFunction } from "express";
import { User } from "../validations/user.validations";
import { Transaction } from "../validations/transaction.validation";
import { z } from "zod";

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    User.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formattedErrors = error.errors.map((err) => ({
        path: err.path.join("."),
        message: err.message,
      }));

      res.status(400).json({ errors: formattedErrors });
      return;
    }

    res.status(500).send("Internal Server Error");
  }
};

export const validateTransaction = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    Transaction.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formattedErrors = error.errors.map((err) => ({
        path: err.path.join("."),
        message: err.message,
      }));

      res.status(400).json({ errors: formattedErrors });
      return;
    }

    res.status(500).send("Internal Server Error");
  }
};
