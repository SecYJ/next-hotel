"use client";

import { usePathname } from "next/navigation";

const AuthTitle = () => {
	const pathname = usePathname();
	const isLoginPage = pathname === "/login";

	return (
		<h1 className="grid space-y-2 font-bold">
			<span className="text-primary-100 text-sm">享樂酒店，誠摯歡迎</span>
			<span className="text-3xl text-white">{isLoginPage ? "立即開始旅程" : "立即註冊"}</span>
		</h1>
	);
};

export default AuthTitle;
