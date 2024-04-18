import Header from "../components/Header";
import BlogPostGrid from "../components/BlogPostGrid";
import { NewsLetter } from "../components/NewsLetter";
import { Footer } from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="max-w-[1100px] mx-auto lgpx-0  px-4">
        <Header isBannerVisible={true} />
        <BlogPostGrid />
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default HomePage;
