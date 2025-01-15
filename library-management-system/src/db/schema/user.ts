import { integer, pgTable, varchar, text, pgEnum } from "drizzle-orm/pg-core"
import { createInsertSchema, createUpdateSchema } from "drizzle-zod"

export const accountTypeEnum = pgEnum('account_type', ['admin', 'user'])
export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    age: integer().notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    account_type: accountTypeEnum().notNull(),
    country: text().default(""),
    state: text().default(""),
    address: varchar({ length: 255 }).default(""),
    phone_number: text().default(""),
    password: varchar({ length: 255 }).notNull()
})

export const createUserSchema = createInsertSchema(usersTable).omit({ id: true })

export const updateUserSchema = createUpdateSchema(usersTable).omit({ id: true })

export const loginUserSchema = createInsertSchema(usersTable).pick({
    email: true,
    password: true
})