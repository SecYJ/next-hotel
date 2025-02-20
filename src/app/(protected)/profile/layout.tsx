import PageSection from "@/components/PageSection";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const ProfileLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-neutral-bg">
            <div className="relative h-[206px] lg:h-[384px]">
                <Image src="https://i.imgur.com/hHo2ODP.jpg" fill alt="profile banner" className="object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="container absolute top-1/2 grid -translate-y-1/2 items-center gap-4 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="size-16 rounded-full bg-primary-100" />
                    <p className="text-3xl text-white">Hello，Jessica</p>
                </div>
            </div>
            <PageSection className="bg-transparent">
                <div className="flex">
                    <div className="w-max space-y-2 px-6 py-4">
                        <Link className="text-primary-100" href={ROUTES.PROFILE}>
                            個人資料
                        </Link>
                        <div className="mx-auto h-1 w-8 rounded-lg bg-primary-100" />
                    </div>
                    <div className="w-max space-y-2 px-6 py-4">
                        <Link className="text-white" href={ROUTES.PROFILE}>
                            我的訂單
                        </Link>
                        {/* <div className="mx-auto h-1 w-8 rounded-lg bg-primary-100" /> */}
                    </div>
                </div>
                {children}
            </PageSection>
        </div>
    );
};

export default ProfileLayout;
