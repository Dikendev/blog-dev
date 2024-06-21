import { z } from 'zod';

export const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(4).max(20),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
