import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './database/schema.ts',
  driver: 'd1',
  out: './database/drizzle',
  verbose: true
})