const mongoose = require("mongoose");
const schema = mongoose.Schema;

const blogSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});
const blog = mongoose.model("Blog", blogSchema);
module.exports = blog;
