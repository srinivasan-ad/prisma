import {Pool} from 'pg'
const pool  = new Pool({
    user : 'verbser',
    password: 'Vilasbhai94!',
    host: 'localhost',
    port: 5432,
    database : 'test'
})
export default pool;