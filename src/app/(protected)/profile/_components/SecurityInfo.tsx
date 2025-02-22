"use client";

import { Button } from "@/components/ui/button";
import { useReducer } from "react";
import PasswordForm from "../_forms/PasswordForm";
import InfoCardLayout from "./InfoLayout";

const SecurityInfo = () => {
    const [isResetting, onReset] = useReducer((state) => !state, false);

    if (isResetting) {
        return <PasswordForm onReset={onReset} />;
    }

    return (
        <InfoCardLayout className="h-fit" title="修改密碼">
            <div className="mb-4 mt-6 space-y-2 text-sm lg:text-base">
                <p className="font-medium text-neutral-80">電子信箱</p>
                <p>Jessica@exsample.com</p>
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-2 text-sm lg:text-base">
                <p className="font-medium text-neutral-80">密碼</p>
                <Button className="row-span-2 bg-transparent text-primary-100" onClick={onReset}>
                    重設
                </Button>
                <div className="flex gap-2">
                    {Array.from({ length: 10 }, (_, index) => (
                        <div className="size-2 rounded-full bg-black" key={index} />
                    ))}
                </div>
            </div>
        </InfoCardLayout>
    );
};

export default SecurityInfo;
