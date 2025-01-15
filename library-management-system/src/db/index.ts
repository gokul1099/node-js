import pg from "pg"
import { drizzle } from "drizzle-orm/node-postgres"

const DATABASE_URL = `postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.DATABASE}`

const pool = new pg.Pool({
    connectionString: DATABASE_URL
})

pool.connect().then((res) => console.log("Database connected"))

export const db = drizzle(pool)
