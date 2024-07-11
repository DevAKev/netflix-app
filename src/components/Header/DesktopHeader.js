import logo from "@assets/logos/netflix.svg";

// ### DESKTOP NAVBAR ###
const DesktopHeader = () => {
  return (
    <div className="desktop-header_container">
      <div className="desktop-header__logo">
        <img src={logo} alt="logo" />
      </div>
      {/* <div className="language-selector">
        <select
          id="language-select"
          name="LanguageSelect"
          data-uia="language-picker-header"
        >
          <option lang="fr" label="Français" value="fr-FR" selected>
            Français
          </option>
          <option lang="en" label="English" value="en-FR">
            English
          </option>
        </select>
      </div> */}
    </div>
  );
};

export default DesktopHeader;
