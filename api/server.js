const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/blogapp")
  .then(() => console.log("Connected to the db !"))
  .catch(console.error);

const Blog = require("./models/blog");

app.get("/blogs", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

app.post("/blog/new", (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
  });
  blog.save();
  res.json(blog);
  console.log(blog);
});

app.delete("/blog/delete/:id", async (req, res) => {
  const result = await Blog.findByIdAndDelete(req.params.id);
  res.json();
  console.log(result + " deleted!");
});

app.listen(3001, () => console.log("Server running on port 3001 !"));
