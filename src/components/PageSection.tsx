import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

type Props = PropsWithChildren<ComponentProps<"section">>;

const PageSection = ({ children, ...props }: Props) => {
    return (
        <section {...props} className={cn("bg-primary-10 py-10 lg:py-20", props.className)}>
            <div className="container">{children}</div>
        </section>
    );
};

export default PageSection;
