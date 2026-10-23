import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DB_URL_WITH_PASS ?? 'postgres://fluxbot:fluxbot@localhost:5432/fluxbot',
  },
  strict: true,
  verbose: true,
});