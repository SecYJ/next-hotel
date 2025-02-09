"use client";

import AuthInput from "@/components/form/AuthInput";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormItem } from "@/components/ui/form";

import { FormField } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { LOGIN_SCHEMA, LoginSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginForm = () => {
	const form = useForm<LoginSchema>({
		defaultValues: {
			email: "",
			password: "",
			remember: false,
		},
		resolver: zodResolver(LOGIN_SCHEMA),
	});

	const onSubmit = async (data: LoginSchema) => {
		// Handle login logic here
		console.log(data);
	};

	return (
		<div className="space-y-10">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<AuthInput placeholder="hello@example.com" onChange={field.onChange} value={field.value}>
								電子信箱
							</AuthInput>
						)}
					/>

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<AuthInput placeholder="請輸入密碼" onChange={field.onChange} value={field.value}>
								密碼
							</AuthInput>
						)}
					/>

					<div className="flex items-center justify-between">
						<FormField
							control={form.control}
							name="remember"
							render={({ field }) => (
								<FormItem>
									<div>
										<div className="flex items-center gap-2">
											<Checkbox
												className="size-6 bg-white data-[state=checked]:bg-primary-100"
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
											<Label className="text-white">記住帳號</Label>
										</div>
									</div>
								</FormItem>
							)}
						/>
						<Link href="#" className="text-primary-100 text-sm">
							忘記密碼？
						</Link>
					</div>

					<Button
						type="submit"
						className="bg-neutral-40 text-neutral-60 h-14 w-full py-4 disabled:opacity-80 disabled:bg-neutral-40"
					>
						會員登入
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default LoginForm;
