import { ComponentProps, ReactNode } from "react";
import { Input } from "../ui/input";

type Props = ComponentProps<"input"> & {
	error?: string;
	children: ReactNode;
};

const AuthInput = ({ children, ...props }: Props) => {
	return (
		<div>
			<div className="space-y-2">
				<label className="inline-block text-white">{children}</label>

				<Input {...props} className="h-14 rounded-lg bg-white p-4 lg:text-base" />

				{props.error && <p className="text-error-120">{props.error}</p>}
			</div>
		</div>
	);
};

export default AuthInput;
