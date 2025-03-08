import { z } from "zod";

export const registerUserSchema = z.object({
  body: z
    .object({
      firstName: z
        .string({ required_error: "First name is required" })
        .min(2, "First name can not be less than 2 Character"),
      lastName: z
        .string({ required_error: "Last name is required" })
        .min(2, "Last name can not be less than 2 Character"),
      email: z
        .string({ required_error: "Email is Required" })
        .email("Invalid Email format"),
      phone: z
        .string({ required_error: "Phone is Required" })
        .regex(/^[0-9+]+$/, "Phone number can only contain numbers and +"),
      role: z.enum(["landlord", "tenant"]),
      password: z
        .string({ required_error: "Password is Required" })
        .min(8, "Password must be 8 Character"),
    })
    .strict(),
});
