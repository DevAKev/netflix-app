import PopcornIcon from "@assets/images/popcorn-image.png";

const PopCornBanner = () => {
  return (
    <div className="popcorn-banner">
      <div className="popcorn-banner__content">
        <div className="popcorn-banner__background">
          <div className="popcorn-image__container">
            <img
              src={PopcornIcon}
              alt="popcorn"
              className="popcorn-banner__image"
            />
          </div>
          <h2 className="popcorn-banner__title">
            Le Netflix que vous aimez pour juste 5,99€.
          </h2>
          <p className="popcorn-banner__description">
            Choissisez l'offre Standard avec pub.
          </p>
          <a href="/" className="popcorn-banner__link">
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopCornBanner;
