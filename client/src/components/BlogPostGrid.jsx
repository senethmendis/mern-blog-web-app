import React, { useEffect, useState } from "react";

const API_BASE = "http://localhost:3001";

const BlogPostGrid = () => {
  const [blogData, setBlogData] = useState([]);

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
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {blogData.map((blog) => (
        <div key={blog._id}>
          <p>{blog.title}</p>
        </div>
      ))}
    </section>
  );
};

export default BlogPostGrid;
