import Navbar from "./Navbar";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import ArticalBanner from "../components/ArticalBanner";

const Header = ({ isBannerVisible, secondBannerImg }) => {
  return (
    <>
      <header className="max-w-[1100px] mx-auto">
        <Navbar />

        <div className="w-full py-10 px-5 border border-white/15 rounded-2xl ">
          <div className="flex md:flex-row flex-col  justify-between">
            <h1 className="text-4xl font-semibold py-3">
              Discorver Nice Articles Here
            </h1>
            <div className="flex gap-3">
              <div className="w-8 h-8 flex justify-center items-center bg-neutral-700 rounded-full">
                <IoLogoTwitter size={20} color="3a86ff" />
              </div>
              <div className="w-8 h-8 flex justify-center items-center bg-neutral-700 rounded-full">
                <FaYoutube size={20} color="d90429" />
              </div>
            </div>
          </div>
          <p className="text-gray-500 py-6 md:py-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Earum veniam, laudantium iste, sint repudiandae praesentium non
            debitis.
          </p>
          <div className="flex items-center gap-3 py-5">
            <FiSearch size={25} />
            <input
              type="search"
              placeholder="Search.."
              className="rounded-full py-1 px-4 bg-neutral-800"
            />
          </div>
        </div>
      </header>
      {isBannerVisible && (
        <ArticalBanner variableImg={true} imgPath={secondBannerImg} />
      )}
    </>
  );
};

export default Header;
