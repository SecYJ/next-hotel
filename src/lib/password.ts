import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

export const hashPassword = async (password: string) => {
	const salt = await bcrypt.genSalt(SALT_ROUNDS);
	return bcrypt.hash(password, salt);
};

export const verifyPassword = async (password: string, hashedPassword: string) => {
	return bcrypt.compare(password, hashedPassword);
};
