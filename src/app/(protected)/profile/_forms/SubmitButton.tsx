import { Button } from "@/components/ui/button";

type Props = Parameters<typeof Button>[0];

const SubmitButton = ({ ...props }: Props) => {
    return (
        <Button type="submit" className="h-14 w-full bg-neutral-40 py-4 text-neutral-60" {...props}>
            儲存設定
        </Button>
    );
};

export default SubmitButton;
