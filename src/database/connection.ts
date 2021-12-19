import { Pool } from 'pg'

export const createConnection = async () => {
  const client = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Alba1401-',
    database: 'code_drops',
  })

  await client.connect()

  return { client }
}
