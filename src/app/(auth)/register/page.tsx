import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import RegisterForm from "./_form";

const RegisterPage = () => {
    return (
        <div className="space-y-4">
            <RegisterForm />
            <div className="flex gap-2 text-white">
                <p>已經有會員了嗎？</p>
                <Link href={ROUTES.LOGIN} replace className="text-primary-100">
                    立即登入
                </Link>
            </div>
        </div>
    );
};

export default RegisterPage;
