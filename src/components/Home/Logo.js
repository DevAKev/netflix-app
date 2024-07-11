// import { useTheme } from "@hooks/ThemeContext";
import logo from "@assets/logos/netflix.svg";

const Logo = () => {
  const isMobile = window.innerWidth < 1023;
  //   const { theme } = useTheme();
  return (
    <div className={"logo-container"}>
      {/* ${theme}-mode */}
      <img
        loading="lazy"
        className={isMobile ? "mobile-header_logo" : "desktop-header__logo"}
        src={logo}
        alt="Logo Netflix"
      />
    </div>
  );
};

export default Logo;
