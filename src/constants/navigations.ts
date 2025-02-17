export const NAVBAR = () => {
	const isLogin = true;

	const navList = [
		{
			to: "/rooms",
			label: "客房旅宿",
		},
		{
			to: isLogin ? "/profile" : "/login",
			label: isLogin ? "我的帳戶" : "會員登入",
		},
		{
			to: "/profile/my-booking",
			label: "立即訂房",
		},
	] as const;

	return navList;
};
