import { z } from "zod";

export const LOGIN_SCHEMA = z.object({
	email: z.string().email(),
	password: z.string().min(6, "密碼至少需要6個字元"),
	remember: z.boolean(),
});

export const USER_BASE_SCHEMA = z.object({
	username: z.string().min(2, { message: "姓名至少需要2個字" }),
	email: z.string().email({ message: "請輸入有效的電子信箱" }),
	password: z.string().min(6, { message: "密碼至少需要6個字" }),
	phoneNumber: z.string().min(10, { message: "請輸入有效的手機號碼" }),
});

export const REGISTER_SCHEMA = USER_BASE_SCHEMA.extend({
	confirmPassword: z.string().min(6, { message: "確認密碼至少需要6個字" }),
	email: z.string().email({ message: "請輸入有效的電子信箱" }),
	agreeTerm: z.boolean().refine((val) => val === true, { message: "請同意使用規範" }),
}).refine((data) => data.password === data.confirmPassword, {
	message: "密碼不一致",
	path: ["confirmPassword"],
});

export type LoginSchema = z.infer<typeof LOGIN_SCHEMA>;
export type RegisterSchema = z.infer<typeof REGISTER_SCHEMA>;
