// import { useTheme } from "@hooks/ThemeContext";
import logo from "@assets/logos/astream-logo-big.png";

const Logo = () => {
  const isMobile = window.innerWidth < 1023;
  //   const { theme } = useTheme();
  return (
    <div className={"logo-container"}>
      {/* ${theme}-mode */}
      <a href="/" className="logo-link">
        <img
          loading="lazy"
          className={isMobile ? "mobile-header_logo" : "desktop-header_logo"}
          src={logo}
          alt="Logo Astreamia"
        />
      </a>
    </div>
  );
};

export default Logo;
