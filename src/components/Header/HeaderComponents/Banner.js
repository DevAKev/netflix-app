const Banner = () => {
  return (
    <div className="home-presentation">
      <h1 className="home-title">Films et séries en illimité, et bien plus</h1>
      <p className="home-subtitle">Où que vous soyez. Annulez à tout moment.</p>
      <p className="home-subtitle-2">
        Prêt à utiliser Astreamia ? Saisissez votre adresse e-mail pour vous
        abonner ou réactiver votre abonnement.
      </p>
      <div className="input-container">
        <input type="email" className="input-email" placeholder="" />
        <label htmlFor="email-input" className="input-label">
          Adresse e-mail
        </label>

        <button className="input-button">
          Commencer
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            data-icon="ChevronRightStandard"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
