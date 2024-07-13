const LanguageLogin = () => {
  return (
    <>
      <div className="language-selector">
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
      </div>
      <button className="sign-in-button">S'identifier</button>
    </>
  );
};

export default LanguageLogin;
