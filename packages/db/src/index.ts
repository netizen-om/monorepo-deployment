import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import dotenv from "dotenv";
import fs from "fs"
dotenv.config();

console.log("DB URL : ", process.env.DATABASE_URL);
console.log("CWD:", process.cwd());
console.log("ENV exists:", fs.existsSync(".env"));


const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

export const client = new PrismaClient({
  adapter,
});
