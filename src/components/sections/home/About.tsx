import Image from "next/image";

const About = () => {
	return (
		<section className="bg-neutral-bg py-20">
			<div className="container relative">
				<picture>
					<source media="(max-width: 1023px)" srcSet="https://i.imgur.com/ZIwA1Za.png" />
					<source media="(min-width: 1024px)" srcSet="https://i.imgur.com/d0Sph7Q.png" />
					<Image
						src="https://i.imgur.com/d0Sph7Q.png"
						className="w-full h-auto"
						loading="lazy"
						alt="about"
						width={1920}
						height={1080}
						sizes="(max-width: 1023px) 100vw, 1920px"
						priority={false}
						quality={75}
					/>
				</picture>
			</div>
		</section>
	);
};

export default About;
