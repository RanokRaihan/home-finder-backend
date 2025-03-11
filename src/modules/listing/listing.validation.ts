import { z } from "zod";

const listingValidationSchema = z.object({
  body: z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    rent: z.number().positive(),
    location: z.string().nonempty(),
    status: z.enum(["available", "rented", "unavailable"]).default("available"),
    type: z.enum(["apartment", "house"]),
    furnished: z.enum(["furnished", "semi-furnished", "unfurnished"]),
    condition: z.enum(["new", "old", "renovated"]),
    bedroom: z.number().positive(),
    bathroom: z.number().positive(),
    kitchen: z.number().positive(),
    size: z.number().positive(),
  }),
});

export default listingValidationSchema;
