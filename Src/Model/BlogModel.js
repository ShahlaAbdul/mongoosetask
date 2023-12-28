import mongoose, { Schema } from "mongoose";

const mySchema = new Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
    isMarried: Boolean,
  });
    export const BlogModel = mongoose.model("Product", mySchema);