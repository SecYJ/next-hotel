import PopularCarousel from "./components/PopularCarousel";
import DecorativeLine from "@/components/DecorativeLine";

const MostPopular = () => {
	return (
		<section className="bg-primary-10 py-20 lg:py-30">
			<div className="container space-y-10 lg:space-y-20">
				<div className="flex items-center gap-10">
					<h2 className="text-primary-100 grid gap-1 text-3xl">
						<span>佳餚</span>
						<span>美饌</span>
					</h2>
					<DecorativeLine className="w-[200px] lg:w-[167px]" />
				</div>

				<PopularCarousel />
			</div>
		</section>
	);
};

export default MostPopular;
