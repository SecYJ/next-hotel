import ROUTES from "@/constants/routes";
import Link from "next/link";
import LoginForm from "./_form";

const LoginPage = () => {
	return (
		<div className="space-y-10">
			<LoginForm />

			<div className="flex items-center gap-2">
				<p className="font-medium text-white">沒有會員嗎？</p>
				<Link href={ROUTES.REGISTER} replace className="text-primary-100">
					前往註冊
				</Link>
			</div>
		</div>
	);
};

export default LoginPage;
