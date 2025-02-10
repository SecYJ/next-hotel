import { pgTable, timestamp, uuid, varchar, integer, boolean, primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const usersTable = pgTable("users", {
	id: uuid("id").primaryKey().defaultRandom(),
	name: varchar("name").notNull(),
	email: varchar("email").notNull().unique(),
	password: varchar("password").notNull(),
	phoneNumber: varchar("phone_number").notNull(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const categoryTable = pgTable("category", {
	id: uuid("id").primaryKey().defaultRandom(),
	name: varchar("name").notNull().unique(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const roomTable = pgTable("room", {
	id: uuid("id").primaryKey().defaultRandom(),
	roomNumber: integer("room_number").notNull(),
	price: integer("price").notNull(),
	isAvailable: boolean("is_available").notNull().default(true),
	categoryId: uuid("category_id")
		.notNull()
		.references(() => categoryTable.id),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const bookingTable = pgTable("booking", {
	id: uuid("id").primaryKey().defaultRandom(),
	userId: uuid("user_id")
		.notNull()
		.references(() => usersTable.id),
	roomId: uuid("room_id")
		.notNull()
		.references(() => roomTable.id),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Relations
export const userRelations = relations(usersTable, ({ many }) => ({
	bookings: many(bookingTable),
}));

export const categoryRelations = relations(categoryTable, ({ many }) => ({
	rooms: many(roomTable),
}));

export const roomRelations = relations(roomTable, ({ one, many }) => ({
	category: one(categoryTable, {
		fields: [roomTable.categoryId],
		references: [categoryTable.id],
	}),
	bookings: many(bookingTable),
}));

export const bookingRelations = relations(bookingTable, ({ one }) => ({
	user: one(usersTable, {
		fields: [bookingTable.userId],
		references: [usersTable.id],
	}),
	room: one(roomTable, {
		fields: [bookingTable.roomId],
		references: [roomTable.id],
	}),
}));
