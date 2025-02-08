import Image from "next/image";

// Import SVG as static images
import facebookIcon from "@/assets/icons/facebook.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import whatsappIcon from "@/assets/icons/whatsapp.svg";
import { CONTACT_LIST } from "@/constants/home-data";

const Footer = () => {
	return (
		<footer className="bg-neutral-bg py-20 text-white">
			<div className="container space-y-20">
				<div className="grid gap-10 lg:grid-cols-[1fr_auto]">
					<div className="space-y-10">
						<Image
							src="https://i.imgur.com/ctt3hEv.png"
							width={196}
							height={72}
							alt="Hotel"
							loading="lazy"
							className="w-auto h-auto"
						/>
						<div className="flex gap-4">
							<div className="grid size-10 place-items-center rounded-full border border-white">
								<Image
									src={facebookIcon}
									width={24}
									height={24}
									alt="Facebook"
									className="size-6 w-auto h-auto"
									loading="lazy"
								/>
							</div>
							<div className="grid size-10 place-items-center rounded-full border border-white">
								<Image
									src={instagramIcon}
									width={24}
									height={24}
									alt="Instagram"
									className="size-6 w-auto h-auto"
									loading="lazy"
								/>
							</div>
							<div className="grid size-10 place-items-center rounded-full border border-white">
								<Image
									src={whatsappIcon}
									width={24}
									height={24}
									alt="WhatsApp"
									className="size-6 w-auto h-auto"
									loading="lazy"
								/>
							</div>
						</div>
					</div>
					{/* NOTE: loop the contact item */}
					<div className="grid-cols-2 gap-x-20 space-y-4 gap-y-10 lg:grid">
						{CONTACT_LIST.map((item) => (
							<ContactItem key={item.title} {...item} />
						))}
					</div>
				</div>

				{/* NOTE: HERE */}
				<div className="justify-between space-y-4 font-normal lg:flex">
					<p>806023 台灣高雄市新興區六角路123號</p>
					<p>© 享樂酒店 2023 All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
};

const ContactItem = ({ title, text }: { title: string; text: string }) => {
	return (
		<div className="space-y-2">
			<p>{title}</p>
			<p className="text-neutral-40 text-sm lg:text-base">{text}</p>
		</div>
	);
};

export default Footer;
