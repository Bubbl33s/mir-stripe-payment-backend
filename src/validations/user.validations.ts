import { z } from "zod";

export const User = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({
      message: "Invalid email",
    }),

  name: z
    .string({
      invalid_type_error: "Name must be a string",
    })
    .min(3, { message: "Name must be at least 3 characters long" })
    .optional(),
});
