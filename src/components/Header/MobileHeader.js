import logo from "@assets/logos/netflix.svg";

// ### MOBILE NAVBAR ###
const MobileHeader = () => {
  return (
    <div className="mobile-header_container">
      <div className="mobile-header_logo">
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

export default MobileHeader;
