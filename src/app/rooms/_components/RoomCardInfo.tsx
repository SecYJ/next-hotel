import { Bed } from "lucide-react";

import DecorativeLine from "@/components/DecorativeLine";
import { ROUTES } from "@/constants/routes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const RoomCardInfo = () => {
    return (
        <div className="content-center space-y-6 p-4 lg:space-y-10 lg:p-10">
            <div className="space-y-2">
                <p className="text-3xl lg:text-4xl">尊爵雙人房</p>
                <p className="text-sm font-medium text-neutral-80 lg:text-base">
                    享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                </p>
            </div>
            <div className="flex gap-4">
                {Array.from({ length: 3 }, (_, index) => (
                    <div
                        key={index + 1}
                        className="grid size-24 items-center gap-2 rounded-lg border border-primary-40 px-4 py-5"
                    >
                        <Bed />
                        <p className="text-sm text-neutral-80">24坪</p>
                    </div>
                ))}
            </div>
            <DecorativeLine className="w-full" />
            <div className="flex justify-between text-primary-100">
                <strong className="lg:text-2xl">NT$ 10,000</strong>
                <Link href={ROUTES.ROOMS}>
                    <ArrowRight className="size-6" />
                </Link>
            </div>
        </div>
    );
};

export default RoomCardInfo;
