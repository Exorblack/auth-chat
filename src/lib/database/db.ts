import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/lib/database/schema"

//neonConfig.fetchConnectionCache = true
//const sql = neon("postgresql://exor:d5ptgceLqHi3@ep-silent-surf-a2ujxgvz.eu-central-1.aws.neon.tech/auth?sslmode=require")
const sql = neon(process.env.DB_URL!)
export const db = drizzle(sql , {schema})

