import { LowSync, LocalStorage } from 'lowdb'
import { getDB,  createConexion} from './database.js' 

const db = getDB()
await db.read()


// db.data.logs.push({timestamp: new Date()})
// db.write();
