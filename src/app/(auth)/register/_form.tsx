"use client";

import AuthInput from "@/components/form/AuthInput";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormField } from "@/components/ui/form";
import { REGISTER_SCHEMA, RegisterSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../_components/SubmitButton";
import { createUserAction } from "../_actions";

const RegisterForm = () => {
	const form = useForm<RegisterSchema>({
		resolver: zodResolver(REGISTER_SCHEMA),
		defaultValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
			phoneNumber: "",
			agreeTerm: false,
		},
	});

	const onSubmit = async (data: RegisterSchema) => {
		const formData = new FormData();
		Object.entries(data).forEach(([key, value]) => {
			if (key === "confirmPassword" || key === "agreeTerm") return;
			if (typeof value === "boolean") {
				formData.append(key, value ? "1" : "0");
				return;
			}
			formData.append(key, value.toString());
		});

		const res = await createUserAction(formData);
		console.log(res);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="username"
					render={({ field, fieldState }) => (
						<AuthInput placeholder="請輸入姓名" {...field} error={fieldState.error?.message}>
							姓名
						</AuthInput>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field, fieldState }) => (
						<AuthInput placeholder="hello@example.com" {...field} error={fieldState.error?.message}>
							電子信箱
						</AuthInput>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field, fieldState }) => (
						<AuthInput
							type="password"
							placeholder="請輸入密碼"
							{...field}
							error={fieldState.error?.message}
						>
							密碼
						</AuthInput>
					)}
				/>

				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field, fieldState }) => (
						<AuthInput
							type="password"
							placeholder="請再輸入一次密碼"
							{...field}
							error={fieldState.error?.message}
						>
							確認密碼
						</AuthInput>
					)}
				/>

				<FormField
					control={form.control}
					name="phoneNumber"
					render={({ field, fieldState }) => (
						<AuthInput placeholder="請輸入手機號碼" {...field} error={fieldState.error?.message}>
							手機號碼
						</AuthInput>
					)}
				/>

				<FormField
					control={form.control}
					name="agreeTerm"
					render={({ field }) => (
						<div className="flex items-center gap-2">
							<Checkbox
								checked={field.value}
								onCheckedChange={field.onChange}
								className="size-6 bg-white data-[state=checked]:bg-primary-100"
							/>
							<label className="text-white">我已閱讀並同意本網站個資使用規範</label>
						</div>
					)}
				/>

				<SubmitButton control={form.control}>註冊</SubmitButton>
			</form>
		</Form>
	);
};

export default RegisterForm;
