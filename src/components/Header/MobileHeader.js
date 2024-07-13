import Banner from "@components/Header/HeaderComponents/Banner";
import LanguageLogin from "@components/Header/HeaderComponents/LanguageLogin";

// ### MOBILE NAVBAR ###
const MobileHeader = () => {
  return (
    <div className="mobile-header_container">
      <LanguageLogin />
      <Banner />
    </div>
  );
};

export default MobileHeader;
