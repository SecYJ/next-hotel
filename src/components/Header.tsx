"use client";

import logo from "@/assets/images/logo.png";
import { NAVBAR } from "@/constants/navigations";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavbar from "./MobileNavbar";

const stickyAndTransparentRoutes = [ROUTES.HOME, ROUTES.ROOMS] as string[];
const authRoutes = [ROUTES.LOGIN, ROUTES.REGISTER] as string[];

const Header = () => {
    const pathname = usePathname();
    const isStickyAndTransparent = stickyAndTransparentRoutes.includes(pathname);
    const isAuthRoute = authRoutes.includes(pathname);

    return (
        <header
            className={cn(
                "bg-neutral-bg px-3 py-4",
                isStickyAndTransparent && "absolute left-0 right-0 top-0 z-10 bg-transparent",
            )}
        >
            <div className="container flex items-center justify-between">
                <Image src={logo} alt="享樂酒店 Logo" />

                <div className="hidden gap-12 lg:flex">
                    {!isAuthRoute &&
                        NAVBAR().map((nav) => (
                            <Link
                                key={nav.to}
                                href={nav.to}
                                className={cn(
                                    "rounded-lg py-4 text-white",
                                    nav.to === "/profile/my-booking" && "rounded-lg bg-primary-100 px-8 py-4",
                                )}
                            >
                                {nav.label}
                            </Link>
                        ))}
                </div>
                <div className="lg:hidden">
                    <MobileNavbar />
                </div>
            </div>
        </header>
    );
};

export default Header;
