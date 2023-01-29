import express from "express";
import mongoose from 'mongoose';
import {router} from "./Routes/Route.js";
import cors from "cors"
const app = express()
app.use(express.json());
app.use(cors());



mongoose.connect("mongodb+srv://Ahsan:ahsanimran12345@myapp.roiqilw.mongodb.net/Myappdatabase?retryWrites=true&w=majority")
    .then(() => console.log("Connected"))
    .catch((err) => console.log("err ===>", err))

// app.get('/', ( req,res) => {
//     res.json({ mssg: "agya" })
// })

app.use("/",router)

app.use("/", (req, res) => {
    res.send(new Date());
});

let PORT = 4000;
app.listen(PORT, () => {
    console.log(`server is running on port!${PORT}`);
});   