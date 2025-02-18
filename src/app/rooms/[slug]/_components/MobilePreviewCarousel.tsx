"use client";

import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useState } from "react";

const images = [
    "https://i.imgur.com/1nMSuFj.jpg",
    "https://i.imgur.com/KwCb2Wq.jpg",
    "https://i.imgur.com/Uv0VG9M.jpg",
    "https://i.imgur.com/z8ZqhMH.jpg",
];

const MobilePreviewCarousel = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    });

    return (
        <div className="relative overflow-hidden" ref={emblaRef}>
            <div className="flex">
                {images.map((image, index) => (
                    <div key={image} className="relative h-[240px] w-full shrink-0">
                        <Image src={image} alt={`房型預覽 ${index + 1}`} fill sizes="100vw" className="object-cover" />
                    </div>
                ))}

                {/* indicators */}
            </div>
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
                {images.map((_, index) => (
                    <button
                        type="button"
                        onClick={() => {
                            setSelectedIndex(index);
                            emblaApi?.scrollTo(index);
                        }}
                        key={index}
                        className={cn(
                            "h-1 rounded-full",
                            selectedIndex === index ? "w-16 bg-primary-100" : "w-8 bg-primary-40",
                        )}
                    />
                ))}
            </div>
        </div>
    );
};

export default MobilePreviewCarousel;
