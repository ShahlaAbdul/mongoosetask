import express from "express";
import mongoose, { Schema } from "mongoose";
const app = express();
const port = 5000;
app.use(express.json())


  const mySchema = new Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
    isMarried: String,
  });
    const UserModel = mongoose.model("Product", mySchema);
  
app.get("/", async (req, res) => {
  const user = await UserModel.find({});
  res.send(user);
});
app.get("/:id", async (req, res) => {
  try {
     const { id } = req.params;
     const user = await UserModel.findById(id);
     res.send(user);   
  }
  catch (error) {
     res.send("errorr");
  }
 
});

app.post("/", async (req, res) => {
  try {
    const { username, email, password, age, isMarried } = req.body
    const newUser = new UserModel({ username, email, password, age, isMarried });
    await newUser.save();
    res.send("example post method");
  } catch (error) {
    res.send(error.message);
  }
})
app.delete("/:id", async (req, res) => {
  const { id } = req.params
  const user = await UserModel.findByIdAndDelete(id)
  res.send(user);
})

app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { username, email, password, age, isMarried } = req.body;
  const user = await UserModel.findByIdAndUpdate(id, {
    username,
    email,
    password,
    age,
    isMarried
  });
  res.send(user);
});


mongoose
  .connect("mongodb+srv://Shahla:sehla200415@mycluster.vpdzf3b.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err.message));


  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
