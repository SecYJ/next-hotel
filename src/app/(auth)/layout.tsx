import AuthTitle from "@/app/(auth)/_components/AuthTitle";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-neutral-bg">
			<div className="container grid h-screen place-content-center lg:grid-cols-2 lg:place-content-stretch">
				<Image
					src="/auth-banner.jpeg"
					className="hidden h-full object-cover lg:block"
					alt="Hotel banner"
					width={1437}
					height={2156}
					priority
				/>
				<div className="grid h-full content-center">
					<div className="mx-auto w-full max-w-[416px]">
						<AuthTitle />
						<div className="mt-10">{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
