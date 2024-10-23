import { z } from "zod";

export const Transaction = z.object({
  amount: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .positive({ message: "Amount must be a positive number" }),
  currency: z
    .string({
      required_error: "Currency is required",
      invalid_type_error: "Currency must be a string",
    })
    .min(3, { message: "Currency must be at least 3 characters long" }),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({ message: "Invalid email" }),
});
