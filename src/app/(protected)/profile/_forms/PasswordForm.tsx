"use client";

import { Form, FormField } from "@/components/ui/form";
import WhiteCard from "@/components/WhiteCard";
import { RESET_PASSWORD_SCHEMA, ResetPasswordSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";
import ProfileInput from "./ProfileInput";
import SubmitButton from "./SubmitButton";

const PasswordForm = ({ onReset }: { onReset: () => void }) => {
    const formId = useId();
    const form = useForm<ResetPasswordSchema>({
        resolver: zodResolver(RESET_PASSWORD_SCHEMA),
        defaultValues: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (data: ResetPasswordSchema) => {
        console.log(data);
        onReset();
    };

    return (
        <Form {...form}>
            <WhiteCard className="space-y-6">
                <div>
                    <p className="text-xl/6 lg:text-2xl/7">修改密碼</p>
                    <form id={formId} className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-2 text-sm lg:text-base">
                            <p className="font-medium text-neutral-80">電子信箱</p>
                            <p>Jessica@exsample.com</p>
                        </div>

                        <FormField
                            control={form.control}
                            name="oldPassword"
                            render={({ field }) => (
                                <ProfileInput placeholder="請輸入舊密碼" label="舊密碼" {...field} />
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="newPassword"
                            render={({ field }) => (
                                <ProfileInput placeholder="請輸入新密碼" label="新密碼" {...field} />
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <ProfileInput placeholder="請輸入確認密碼" label="確認密碼" {...field} />
                            )}
                        />
                    </form>
                </div>
                <SubmitButton form={formId} />
            </WhiteCard>
        </Form>
    );
};

export default PasswordForm;
