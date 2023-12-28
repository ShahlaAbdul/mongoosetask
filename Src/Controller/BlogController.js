import { BlogModel } from "../Model/BlogModel.js";


export const getAllBlogs= async (req, res) => {
    const user = await BlogModel.find({});
    res.send(user);
  }
  export const getByIdBlog =async (req, res) => {
    try {
       const { id } = req.params;
       const user = await BlogModel.findById(id);
       res.send(user);   
    }
    catch (error) {
       res.send("errorr");
    }
   
  }

  export const createBlogById= async (req, res) => {
    try {
      const { username, email, password, age, isMarried } = req.body
      const newUser = new BlogModel({ username, email, password, age, isMarried });
      await newUser.save();
      res.send("example post method");
    } catch (error) {
      res.send(error.message);
    }
  }
  export const deleteBlogById =async (req, res) => {
    const { id } = req.params
    const user = await BlogModel.findByIdAndDelete(id)
    res.send(user);
  }
  export const updateBlogById= async (req, res) => {
    const { id } = req.params;
    const { username, email, password, age, isMarried } = req.body;
    const user = await BlogModel.findByIdAndUpdate(id, {
      username,
      email,
      password,
      age,
      isMarried
    });
    res.send(user);
  }
   