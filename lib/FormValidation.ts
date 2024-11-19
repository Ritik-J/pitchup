import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(5, "title should be greater than 3 character")
    .max(100, "title should be less than 100 character"),

  description: z
    .string()
    .min(10, "description should be greater than 10 character")
    .max(200, "description should be less than 200 character"),

  category: z
    .string()
    .min(5, "description should be greater than 10 character")
    .max(50, "description should be less than 200 character"),

  link: z.string().url(),

  pitch: z.string().min(50, "pitch should be greater than 50 character"),
});
