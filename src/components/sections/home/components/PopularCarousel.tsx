"use client";

import { MOST_POPULAR_LIST } from "@/constants/home-data";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const PopularCarousel = () => {
	const [emblaRef] = useEmblaCarousel(
		{
			loop: true,
		},
		[
			Autoplay({
				stopOnInteraction: false,
			}),
		]
	);

	return (
		<div className="overflow-hidden" ref={emblaRef}>
			<div className="flex gap-6">
				{MOST_POPULAR_LIST.map((item) => (
					<div key={item.title} className="relative w-3/4 min-w-0 shrink-0 last:mr-6 lg:w-[calc(33%-24px)]">
						<Image
							src={item.img}
							alt={item.title}
							width={500}
							height={480}
							className="h-120 w-full rounded-lg object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularCarousel;
