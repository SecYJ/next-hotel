import { Button } from "@/components/ui/button";
import WhiteCard from "@/components/WhiteCard";

const SecurityInfo = () => {
    return (
        <WhiteCard>
            <p className="text-xl/6">修改密碼</p>
            <div className="mb-4 mt-6 space-y-2 text-sm">
                <p className="font-medium text-neutral-80">電子信箱</p>
                <p>Jessica@exsample.com</p>
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-2 text-sm">
                <p className="font-medium text-neutral-80">密碼</p>
                <Button className="row-span-2 bg-transparent text-primary-100">重設</Button>
                <div className="flex gap-2">
                    {Array.from({ length: 10 }, (_, index) => (
                        <div className="size-2 rounded-full bg-black" key={index} />
                    ))}
                </div>
            </div>
        </WhiteCard>
    );
};

export default SecurityInfo;
