import { UserModel } from "../Model/UserModel.js";



 export const getAllUsers= async (req, res) => {
    const user = await UserModel.find({});
    res.send(user);
  }
  export const getbyIdUser= async (req, res) => {
    try {
       const { id } = req.params;
       const user = await UserModel.findById(id);
       res.send(user);   
    }
    catch (error) {
       res.send("errorr");
    }
   
  }
 export const createUserById= async (req, res) => {
    try {
      const { username, email, password, age, isMarried } = req.body
      const newUser = new UserModel({ username, email, password, age, isMarried });
      await newUser.save();
      res.send("example post method");
    } catch (error) {
      res.send(error.message);
    }
  }
  export const deleteUserById=  async (req, res) => {
    const { id } = req.params
    const user = await UserModel.findByIdAndDelete(id)
    res.send(user);
  }
  export const updateUserById=  async (req, res) => {
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
  }
