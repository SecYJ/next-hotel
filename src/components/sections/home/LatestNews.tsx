import DecorativeLine from "@/components/DecorativeLine";
import { NEWS_DATA } from "@/constants/home-data";
import Image from "next/image";

const LatestNews = () => {
	return (
		<section className="bg-primary-10">
			<div className="container py-20 grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
				<div className="space-y-6">
					<h2 className="text-primary-100 grid gap-1 text-3xl lg:text-5xl">
						<span>最新</span>
						<span>消息</span>
					</h2>
					<DecorativeLine />
				</div>
				<ul className="space-y-10">
					{NEWS_DATA.map((item) => (
						<li key={item.img} className="grid lg:grid-cols-[4fr_8fr] lg:items-center lg:gap-6">
							<Image
								src={item.img}
								width={500}
								height={300}
								className="w-full object-cover"
								alt={item.title}
								loading="lazy"
							/>
							<div className="mt-6 space-y-2">
								<h3 className="text-3xl">{item.title}</h3>
								<p className="text-neutral-80 text-sm font-medium">{item.desc}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default LatestNews;
