// columns.helpers.ts
import { sql } from "drizzle-orm";
import { text } from "drizzle-orm/sqlite-core";

const timestamp = () =>
	text()
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`);

export const timestamps = {
	createdAt: timestamp(),
	updatedAt: timestamp(),
};
