import { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"div"> & {
    children: ReactNode;
};

const WhiteCard = ({ children, ...props }: Props) => {
    return (
        <div className="rounded-lg bg-white p-6" {...props}>
            {children}
        </div>
    );
};

export default WhiteCard;
