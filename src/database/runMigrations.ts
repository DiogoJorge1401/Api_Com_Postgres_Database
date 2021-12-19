import { createConnection } from './connection'
import { join } from 'path'
import fs from 'fs'
;(async () => {
  const { client } = await createConnection()
  const fileDatabaseDir = join(__dirname, 'migrations')

  console.log('Start Migrations - ', new Date().toLocaleTimeString())

  fs.readdir(fileDatabaseDir, (err, files) => {
    if (err) console.error(err)
    files.forEach((f) => {
      fs.readFile(join(fileDatabaseDir, f), async (err, c) => {
        if (err) console.error(err)
        const sql = c.toString()
        await client.query(sql)
      })
    })
  })

  console.log('Finish Migrations - ', new Date().toLocaleTimeString())
})()
