import Hero from "@/components/sections/home/Hero";
import LatestNews from "@/components/sections/home/LatestNews";
import About from "@/components/sections/home/About";
import MostPopular from "@/components/sections/home/MostPopular";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Hero />
			<LatestNews />
			<About />
			<MostPopular />
			<Footer />
		</main>
	);
}
