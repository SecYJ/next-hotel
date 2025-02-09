"use client";

import AuthInput from "@/components/form/AuthInput";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormItem } from "@/components/ui/form";

import { FormField } from "@/components/ui/form";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../components/SubmitButton";
import { LOGIN_SCHEMA, LoginSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";

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
						render={({ field, fieldState }) => (
							<AuthInput
								placeholder="hello@example.com"
								onChange={field.onChange}
								value={field.value}
								error={fieldState.error?.message}
							>
								電子信箱
							</AuthInput>
						)}
					/>

					<FormField
						control={form.control}
						name="password"
						render={({ field, fieldState }) => (
							<AuthInput
								placeholder="請輸入密碼"
								onChange={field.onChange}
								value={field.value}
								error={fieldState.error?.message}
							>
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
											<label className="text-white">記住帳號</label>
										</div>
									</div>
								</FormItem>
							)}
						/>
						<Link href="#" className="text-primary-100 text-sm">
							忘記密碼？
						</Link>
					</div>

					<SubmitButton control={form.control}>會員登入</SubmitButton>
				</form>
			</Form>
		</div>
	);
};

export default LoginForm;
