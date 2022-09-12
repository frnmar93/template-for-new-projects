import { Low, JSONFile } from 'lowdb'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

let db;
const __dirname = dirname(fileURLToPath(import.meta.url));

export async function createConexion(){
  const file = join(__dirname, './db.json')
  console.log(file)
  const adapter = new JSONFile(file)
  db = new Low(adapter)
  console.log(db)

  await db.read()
  db.data ||= { 
    logs: [], 
    users: []
  }
  await db.write()
  console.log("sale?")
}
createConexion() 
export const getDB = () => db