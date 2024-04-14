import BlogPostGrid from "./components/BlogPostGrid";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { NewsLetter } from "./components/NewsLetter";

function App() {
  return (
    <>
      {/*  */}
      <div className="max-w-[1100px] mx-auto lgpx-0  px-4">
        <Header />
        <BlogPostGrid />
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
