import PopcornIcon from "@assets/images/popcorn-image.png";

const PopCornBanner = () => {
  return (
    <div className="popcorn-banner">
      <div className="popcorn-banner__content">
        <div className="popcorn-image__container">
          <img
            src={PopcornIcon}
            alt="popcorn"
            className="popcorn-banner__image"
          />
        </div>
        <div className="popcorn-banner__text-container">
          <h2 className="popcorn-banner__title">
            Le Netflix que vous aimez pour juste 5,99€.
          </h2>
          <p className="popcorn-banner__description">
            Choissisez l'offre Standard avec pub.
          </p>
          <button className="popcorn-banner__button">
            En savoir plus
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
    </div>
  );
};

export default PopCornBanner;
