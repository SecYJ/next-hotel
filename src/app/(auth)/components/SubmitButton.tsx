import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { Control, FieldValues, useFormState } from "react-hook-form";

type Props<T extends FieldValues> = PropsWithChildren<{
	control: Control<T>;
}>;

export const SubmitButton = <T extends FieldValues>({ control, children }: Props<T>) => {
	const { isValid } = useFormState({ control });

	return (
		<Button
			type="submit"
			className={cn(isValid ? "bg-primary-100 text-white" : "bg-neutral-40 text-neutral-60", "h-14 w-full py-4")}
			disabled={!isValid}
		>
			{children}
		</Button>
	);
};
