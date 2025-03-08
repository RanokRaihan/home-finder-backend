import { z } from "zod";

export const loginValidationSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email address"),
    password: z.string({ required_error: "password is required" }),
  }),
});
