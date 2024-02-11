import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { nanoid } from 'nanoid'

const id = text('id', { length: 21 }).primaryKey().$defaultFn(nanoid)
const now = () => Math.floor(Date.now() / 1000)

export const classes = sqliteTable('classes', {
  id,
  icon: text('icon'),
  title: text('title').notNull(),
  description: text('description'),

  created: integer('created').$defaultFn(now),
  updated: integer('updated').$defaultFn(now),
})
