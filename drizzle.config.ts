import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

//const dbUrl = process.env.DB_URL!
const dbUrl = "postgresql://exor:d5ptgceLqHi3@ep-silent-surf-a2ujxgvz.eu-central-1.aws.neon.tech/auth?sslmode=require"

export default defineConfig({ 
  schema: "./src/lib/database/schema.ts",
  out:"./drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: dbUrl
  },
  verbose: true,
  strict: true,
})