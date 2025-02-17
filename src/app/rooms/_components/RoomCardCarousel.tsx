"use client";

import { type FC, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoomCardCarouselProps {
    images: string[];
}

const RoomCardCarousel: FC<RoomCardCarouselProps> = ({ images }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    });

    const scrollPrev = () => {
        emblaApi?.scrollPrev();
        setSelectedIndex(emblaApi?.selectedScrollSnap() ?? 0);
    };
    const scrollNext = () => {
        emblaApi?.scrollNext();
        setSelectedIndex(emblaApi?.selectedScrollSnap() ?? 0);
    };

    return (
        <div className="relative">
            <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                    {images.map((image, index) => (
                        <div key={index} className="relative w-full shrink-0">
                            <Image
                                src={image}
                                className="size-full h-[250px] object-cover lg:h-[450px]"
                                alt={`房型預覽 ${index + 1}`}
                                width={1000}
                                height={1000}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-all hover:bg-white"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-all hover:bg-white"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

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

export default RoomCardCarousel;
