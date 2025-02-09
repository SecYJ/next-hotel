import { z } from "zod";

export const LOGIN_SCHEMA = z.object({
	email: z.string().email(),
	password: z.string().min(6, "密碼至少需要6個字元"),
	remember: z.boolean(),
});

export type LoginSchema = z.infer<typeof LOGIN_SCHEMA>;
