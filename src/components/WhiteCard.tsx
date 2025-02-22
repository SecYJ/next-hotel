import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"div"> & {
    children: ReactNode;
};

const WhiteCard = ({ children, ...props }: Props) => {
    return (
        <div {...props} className={cn("rounded-lg bg-white p-6", props.className)}>
            {children}
        </div>
    );
};

export default WhiteCard;
