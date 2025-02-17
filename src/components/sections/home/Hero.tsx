import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ROUTES } from "@/constants/routes";
import DecorativeLine from "@/components/DecorativeLine";

const HeroLayout = ({ children }: { children: ReactNode }) => {
    return (
        <section className="relative">
            <div className="relative h-dvh">
                <picture>
                    <source media="(min-width: 1024px)" type="image/webp" srcSet="https://i.imgur.com/2TDrHNx.png" />
                    <source media="(min-width: 1024px)" srcSet="https://i.imgur.com/2TDrHNx.png" />
                    <source type="image/webp" srcSet="https://i.imgur.com/ela6xtC.png" />
                    <Image
                        src="https://i.imgur.com/ela6xtC.png"
                        alt="Hero background"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                        quality={90}
                    />
                </picture>
                <div className="absolute inset-0 bg-black/60" />
            </div>
            {children}
        </section>
    );
};

const HeroSlogan = () => {
    return (
        <div className="space-y-5 lg:space-y-10">
            <h1 className="grid gap-2 text-center text-primary-100 lg:text-left">
                <span className="text-3xl/[33px] lg:text-[2.5rem]/[3rem]">享樂酒店</span>
                <span>Enjoyment Luxury Hotel</span>
            </h1>
            <DecorativeLine className="mx-auto h-20 w-0.5 lg:block lg:h-0.5 lg:w-full" />
        </div>
    );
};

const Hero = ({ type }: { type: "home" | "rooms" }) => {
    if (type === "home") {
        return (
            <HeroLayout>
                <div className="gap-38 container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:grid lg:grid-cols-[1fr_2fr] lg:items-center">
                    <HeroSlogan />
                    <div className="gradient-to-b h-21 mx-auto mb-10 mt-5 w-0.5 bg-primary-100 from-primary-100 to-white lg:hidden" />
                    <div className="bg-gray-custom-100 lg:pr-50 mx-auto grid h-[420px] w-[clamp(291px,100vw-291px,678px)] content-center rounded-[2.5rem] border-r border-t border-custom-gray-100 backdrop-blur-[20px] lg:h-[678px] lg:w-auto">
                        <div className="-translate-x-5 lg:-translate-x-12">
                            <p className="lg:text-[100px]/30 grid gap-2 text-5xl text-white">
                                <span>高雄</span>
                                <span>豪華住宿之選</span>
                            </p>
                            <p className="mb-10 mt-6 text-neutral-40">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
                            <Button asChild>
                                <Link
                                    href={ROUTES.HOME}
                                    className="flex h-14 w-full items-center gap-4 !bg-white p-5 text-black"
                                >
                                    <span className="ml-auto">立即訂房</span>
                                    <span className="h-px w-20 bg-black" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </HeroLayout>
        );
    }
    return (
        <HeroLayout>
            <div className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 items-center justify-items-center gap-10 lg:grid-cols-[500px_auto] lg:justify-items-stretch lg:gap-20">
                <div>
                    <HeroSlogan />
                </div>
                <h2 className="text-5xl text-white">客房旅宿</h2>
            </div>
        </HeroLayout>
    );
};

export default Hero;
