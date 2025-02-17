"use client";

import { NAVBAR } from "@/constants/navigations";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";

const MobileNavbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button type="button" onClick={() => setOpen(!open)}>
                <Menu className="text-white" />
            </button>
            {open &&
                createPortal(
                    <div className="fixed inset-0 z-50 content-center bg-neutral-bg">
                        <button type="button" className="absolute right-7 top-7" onClick={() => setOpen(false)}>
                            <X className="text-white" />
                        </button>
                        <div className="container grid gap-8 text-center">
                            {NAVBAR().map((item) => (
                                <Link
                                    key={item.to}
                                    href={item.to}
                                    className="rounded-lg py-4 text-white transition-colors duration-200 hover:bg-primary-100"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
};

export default MobileNavbar;
