import express from "express"
import cors from "cors"
import pool from "./db"
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT||5000;
app.post('/test-mail',async(req,res)=>{
try{
    const {id,mail} = req.body;
    const newUser = await pool.query(
        'INSERT INTO users (id,name) VALUES($1,$2) RETURNING*;',
        [id,mail]
    );
    res.status(200).json(newUser.rows[0]);
}

catch(err){
    console.error(err);
    res.status(500).send("Server Error");
}});
app.listen(PORT,() => {
    console.log(`Server started at PORT http://localhost:${PORT}`);
})