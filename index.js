import express from "express";
import router from "./src/routes/main.js";
import { connectDb } from "./src/db.conf.js";

connectDb();

const app = express()

app.use(express.json())
app.use('/api', router)


app.listen(3000, ()=>{
    console.log('Running your app at port 3000')
})