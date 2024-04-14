import BlogPostGrid from "./components/BlogPostGrid";
import Header from "./components/Header";

function App() {
  return (
    <>
      {/*  */}
      <div className="max-w-[1100px] mx-auto md:px-0 px-4">
        <Header />
        <BlogPostGrid />
      </div>
    </>
  );
}

export default App;
