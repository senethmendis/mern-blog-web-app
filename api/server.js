const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");

const app = express();
// const upload = multer({ dest: "uploads/" });
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "/tmp/my-uploads");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix);
//   },
// });
// const upload = multer({ storage });

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

// app.post("/blog/upload", upload.single("file"), (req, res) => {
//   res.json(req.file);
// });

app.delete("/blog/delete/:id", async (req, res) => {
  const result = await Blog.findByIdAndDelete(req.params.id);
  res.json();
  console.log(result + " deleted!");
});

app.listen(3001, () => console.log("Server running on port 3001 !"));
