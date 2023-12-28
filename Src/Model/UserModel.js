import mongoose, { Schema } from "mongoose";


const myBlogSchema = new Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
    isMarried: Boolean,
  });
 export   const UserModel = mongoose.model("Product", myBlogSchema);