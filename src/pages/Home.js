import Header from "@components/Header/Header";
import PopCornBanner from "../components/Home/PopcornBanner";
import TvAnimation from "../components/Home/TvAnimation";
import AllDevicesAnimation from "../components/Home/AllDevicesAnimation";
import ForKidsAnimation from "../components/Home/ForKidsAnimation";
import DownloadAnimation from "../components/Home/DownloadAnimation";

const Home = () => {
  return (
    <>
      <Header />
      <PopCornBanner />
      <TvAnimation />
      <AllDevicesAnimation />
      <ForKidsAnimation />
      <DownloadAnimation />
      <h1>Home</h1>
    </>
  );
};

export default Home;
