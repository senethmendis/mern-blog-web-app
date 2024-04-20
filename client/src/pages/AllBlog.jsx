import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { Avatar, blogImg } from "../assets";
import BlogCard from "../components/BlogCard";

const API_BASE = "http://localhost:3001";

const AllBlog = () => {
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
    <section>
      <Header
        isBannerVisible={false}
        variableImg={false}
        secondBannerImg={Avatar}
        isSearchBarVidible={false}
      />
      <div className="max-w-[1100px] mx-auto flex flex-col px-3 gap-4 py-5">
        <div
          id="blog"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {blogData.map((blog) => (
            <BlogCard
              key={blog._id}
              blogImg={blogImg}
              description={blog.description}
              timestamp={blog.timestamp}
              title={blog.title}
              blogObj={blog}
            />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default AllBlog;
