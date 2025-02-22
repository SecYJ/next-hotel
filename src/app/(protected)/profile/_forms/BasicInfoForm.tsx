import { Form, FormField } from "@/components/ui/form";
import { BASIC_INFO_SCHEMA, BasicInfoSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InfoCardLayout from "../_components/InfoLayout";
import ProfileInput from "./ProfileInput";
import SubmitButton from "./SubmitButton";

const BasicInfoForm = ({ onReset }: { onReset: () => void }) => {
    const form = useForm<BasicInfoSchema>({
        resolver: zodResolver(BASIC_INFO_SCHEMA),
        defaultValues: {
            username: "",
            phoneNumber: "",
            address: "",
        },
    });

    const onSubmit = (data: BasicInfoSchema) => {
        console.log(data);
        onReset();
    };

    return (
        <InfoCardLayout title="基本資料" className="space-y-6">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => <ProfileInput label="姓名" {...field} />}
                    />
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => <ProfileInput label="手機號碼" {...field} />}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => <ProfileInput label="地址" {...field} />}
                    />
                    <SubmitButton />
                </form>
            </Form>
        </InfoCardLayout>
    );
};

export default BasicInfoForm;
