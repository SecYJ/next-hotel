import { Input } from "@/components/ui/input";
import { ComponentProps, useId } from "react";

type ProfileInputProps = ComponentProps<"input"> & {
    label: string;
};

const ProfileInput = ({ label, ...props }: ProfileInputProps) => {
    const id = useId();

    return (
        <div className="space-y-2 rounded-lg text-sm lg:text-base">
            <label htmlFor={id}>{label}</label>
            <Input id={id} className="h-14 border border-neutral-40 p-4" {...props} />
        </div>
    );
};

export default ProfileInput;
