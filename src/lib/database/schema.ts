//export const Users = pgTable("Users", {
 //id: serial("id").notNull().primaryKey(),
 //name: text("name"),
 //first_name: text("first_name"),
 //last_name: text("last_name"),
 //username: text("username").notNull().unique(),
 //email: text("email").notNull(),
 //emailVerified: timestamp("emailVerified", { mode: "date" }),
 //password: text("password").notNull(),
 //confirm_password: timestamp("confirm_password", { mode: "date" }),
 //image: text("image"),
//})

import {
  timestamp,
  pgTable,
  text,
  primaryKey,
 integer,
 serial,
} from "drizzle-orm/pg-core"
import type { AdapterAccount } from '@auth/core/adapters'

export const users = pgTable("user", {
 id: serial("id").notNull().primaryKey(),
 name: text("name"),
 email: text("email").notNull(),
 emailVerified: timestamp("emailVerified", { mode: "date" }),
 image: text("image"),
})

export const Users = pgTable("Users", {
 id: serial("id").notNull().primaryKey(),
 first_name: text("first_name").notNull(),
 last_name: text("last_name").notNull(),
 username: text("username").notNull().unique(),
 email: text("email").notNull().unique(),
 password: text("password").notNull(),
 //confirm_password: text("confirm_password").notNull(),
 image: text("image"),
})

export const accounts = pgTable(
"account",
{
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  type: text("type").$type<AdapterAccount["type"]>().notNull(),
  provider: text("provider").notNull(),
  providerAccountId: text("providerAccountId").notNull(),
  refresh_token: text("refresh_token"),
  access_token: text("access_token"),
  expires_at: integer("expires_at"),
  token_type: text("token_type"),
  scope: text("scope"),
   id_token: text("id_token"),
  session_state: text("session_state"),
},
(account) => ({
  compoundKey: primaryKey({ columns: [account.provider, account.providerAccountId] }),
})
)

export const sessions = pgTable("session", {
 sessionToken: text("sessionToken").notNull().primaryKey(),
 userId: text("userId")
   .notNull()
   .references(() => users.id, { onDelete: "cascade" }),
 expires: timestamp("expires", { mode: "date" }).notNull(),
})

export const verificationTokens = pgTable(
 "verificationToken",
 {
   identifier: text("identifier").notNull(),
   token: text("token").notNull(),
   expires: timestamp("expires", { mode: "date" }).notNull(),
 },
 (vt) => ({
   compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
 })
)
