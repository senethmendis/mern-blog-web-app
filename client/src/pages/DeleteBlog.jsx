import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { blogImg } from "../assets";
import Header from "../components/Header";
const API_BASE = "http://localhost:3001";

const DeleteBlog = () => {
  const [blogData, setBlogData] = useState([]);

  async function deleteBlogs(id) {
    try {
      const response = await fetch(API_BASE + "/blog/delete/" + id, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog post");
      }

      // No need to parse JSON here because the response is expected to be empty
      // Handle the deletion locally by filtering out the deleted blog post
      setBlogData((blogData) => blogData.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  }

  async function getBlogData() {
    fetch(API_BASE + "/blogs")
      .then((res) => res.json())
      .then((data) => setBlogData(data))
      .catch((err) => console.log("Error : " + err));
  }
  useEffect(() => {
    getBlogData();
    console.log(blogData);
  }, []);
  return (
    <section>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {blogData.map((blog) => (
          <BlogCard
            key={blog._id}
            blogImg={blogImg}
            description={blog.title}
            timestamp={blog.timestamp}
            title={blog.title}
            isDel={true}
            onClickDelete={() => deleteBlogs(blog._id)}
          />
        ))}
      </div>
    </section>
  );
};

export default DeleteBlog;
