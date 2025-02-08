import { cn } from "@/lib/utils";

const DecorativeLine = ({ className }: { className?: string }) => {
	return <div className={cn("h-0.5 w-[140px] bg-gradient-to-r from-primary-100 to-white", className)} />;
};

export default DecorativeLine;
