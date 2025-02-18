"use client";

import { PropsWithChildren, type ReactNode, useEffect, useState } from "react";

interface Props {
    mobile: ReactNode;
    desktop: ReactNode;
}

const BreakpointsWrapper = ({ mobile, desktop }: Props) => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsLargeScreen(event.matches);
        };

        // Set initial value
        setIsLargeScreen(mediaQuery.matches);

        // Add listener
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Cleanup
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return isLargeScreen ? desktop : mobile;
};

export default BreakpointsWrapper;
