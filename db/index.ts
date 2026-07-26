import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

type D1DatabaseLike = Parameters<typeof drizzle>[0];

export function getDb(database?: D1DatabaseLike) {
  if (!database) {
    throw new Error("No D1 database binding is configured for the static Netlify site.");
  }

  return drizzle(database, { schema });
}
