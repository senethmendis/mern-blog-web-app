import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { Avatar, blogImg } from "../assets";
import BlogCard from "../components/BlogCard";
import { FaSearch } from "react-icons/fa";

const API_BASE = "http://localhost:3001";

const AllBlog = () => {
  const [blogData, setBlogData] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);

  async function getBlogData() {
    fetch(API_BASE + "/blogs")
      .then((res) => res.json())
      .then((data) => setBlogData(data))
      .catch((err) => console.log("Error : " + err));
  }
  useEffect(() => {
    getBlogData();
    // console.log(blogData);
  }, []);

  return (
    <section>
      <Header
        isBannerVisible={false}
        variableImg={false}
        secondBannerImg={Avatar}
        isSearchBarVidible={false}
      />
      <div className="max-w-[1100px] mx-auto flex flex-col px-3 gap-4 py-5 relative">
        <div className="blue__gradient w-[40%] h-[50%] absolute -z-10 top-0 -mt-10" />
        <form
          action=""
          className="w-full flex  flex-row gap-4 text-white items-center"
        >
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            className="h-10 w-full rounded-md px-3 bg-black/20 backdrop-blur-xl border border-white/10"
          />{" "}
          <button type="button" className="bg-blue-600 p-2 rounded-full">
            <FaSearch size={25} color="fff" />
          </button>
        </form>

        <div
          id="blog"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {blogData
            .filter((title) => {
              return search.toLowerCase() === ""
                ? title
                : title.title.toLowerCase().includes(search);
            })
            .map((blog) => (
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
