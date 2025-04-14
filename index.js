import express from "express";
import { Routes, Connect } from "cruddy-cat";
import * as schema from "./schema.js";

// connect to mongodb
Connect('mongodb+srv://afrigames123:7X3DL7Rxm13OUNNx@cluster0.s8us6bg.mongodb.net/ClassRoom?retryWrites=true&w=majority&appName=Cluster0');

// initialize your app
const app = express();
app.use(express.json());

// initialize routes on api
app.use('/api', Routes(schema).router());

// run the server
app.listen(3000, ()=>{
    console.log('Running your app at port 3000')
})