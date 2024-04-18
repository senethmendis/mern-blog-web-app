import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";

const API_BASE = "http://localhost:3001";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const [blogData, setBlogData] = useState([]);

  const notify = () => toast("New Blog Added!");

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

  async function addBlog() {
    const data = await fetch(API_BASE + "/blog/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        author: author,
      }),
    }).then((res) => res.json());

    // Handle response from server if needed
    console.log("New blog added:", data);

    // Reset form fields after successful submission
    setTitle("");
    setAuthor("");
    setDescription("");
  }

  function handleForm(e) {
    e.preventDefault();
    addBlog().then(notify());
  }

  return (
    <div className="w-full px-4">
      <Navbar />

      <section className="flex justify-center items-center py-10">
        <form
          onSubmit={handleForm}
          className="w-full md:w-[450px] flex flex-col gap-4"
        >
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bounce
          />
          <input
            type="text"
            value={title}
            className="add-blog-form"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={author}
            className="add-blog-form"
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="add-blog-form"
            cols="30"
            rows="10"
          ></textarea>
          <input type="file" name="avatar" />
          <button type="submit" className="sub-btn ">
            Post Blog
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddBlog;
