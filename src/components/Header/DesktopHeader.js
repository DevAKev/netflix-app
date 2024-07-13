import Banner from "@components/Header/HeaderComponents/Banner.js";
import LanguageLogin from "@components/Header/HeaderComponents/LanguageLogin.js";

// ### DESKTOP NAVBAR ###
const DesktopHeader = () => {
  return (
    <div className="desktop-header_container">
      <LanguageLogin />
      <Banner />
    </div>
  );
};

export default DesktopHeader;
