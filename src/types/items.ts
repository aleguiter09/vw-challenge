import { z } from "zod";

export const ItemSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  description: z.string().optional(),
  createdAt: z.string(),
});

export type Item = z.infer<typeof ItemSchema>;
