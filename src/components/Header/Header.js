import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Logo from "@components/Header/HeaderComponents/Logo";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

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
    <div className="header-container">
      <header className={`box ${className} header`}>
        <div className="box1">
          <div className="flex_row">
            <div
              className={
                isMobile ? "mobile-logo-container" : "desktop-logo-container"
              }
            >
              {/* Logo */}
              <Logo />
            </div>
            {isMobile ? <MobileHeader /> : <DesktopHeader />}
          </div>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
