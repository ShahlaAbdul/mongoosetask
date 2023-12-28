import express from "express";
import mongoose, { Schema } from "mongoose";
import { blogRouter } from "./Src/Router/BlogRouter.js";
const app = express();
const port = 5000;
app.use(express.json())

app.use('/',blogRouter)
  

mongoose.connect("mongodb+srv://Shahla:sehla200415@mycluster.vpdzf3b.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err.message));


  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

