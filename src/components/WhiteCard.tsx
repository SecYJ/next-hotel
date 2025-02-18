import { ReactNode } from "react";

const WhiteCard = ({ children }: { children: ReactNode }) => {
    return <div className="rounded-lg bg-white p-6">{children}</div>;
};

export default WhiteCard;
