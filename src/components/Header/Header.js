import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import SearchNavBar from "../MUI/Navbar";

// Header Component
const Header = ({ className }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1023);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <SearchNavBar />
      <div className="header-container">
        {/* <SearchNavBar /> */}
        <header className={`box ${className} header`}>
          <div className="box1">
            <div className="flex_row">
              <div
                className={
                  isMobile ? "mobile-logo-container" : "desktop-logo-container"
                }
              >
                {/* Logo */}
              </div>
              {isMobile ? <MobileHeader /> : <DesktopHeader />}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
