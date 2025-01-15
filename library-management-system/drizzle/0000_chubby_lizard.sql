CREATE TYPE "public"."account_type" AS ENUM('admin', 'user');--> statement-breakpoint
CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"age" integer NOT NULL,
	"email" varchar(255) NOT NULL,
	"account_type" "account_type" NOT NULL,
	"country" text DEFAULT '',
	"state" text DEFAULT '',
	"address" varchar(255) DEFAULT '',
	"phone_number" text DEFAULT '',
	"password" varchar(255) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
