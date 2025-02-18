import { ReactNode } from "react";

const TitleDivider = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="h-6 w-1 rounded-lg bg-primary-100" />
            <p>{children}</p>
        </div>
    );
};

export default TitleDivider;
