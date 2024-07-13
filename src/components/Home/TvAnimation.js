import Tv from "@assets/images/tv-icon.png";
const TvAnimation = () => {
  return (
    <>
      <div className="tv-text__container">
        <h2 className="tv-text__title">Regardez Netflix sur votre TV</h2>
        <p className="tv-text__description">
          Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast,
          Apple TV, lecteurs Blu-ray et bien plus.
        </p>
      </div>
      <div className="tv-animation">
        <img src={Tv} alt="tv" />
      </div>
    </>
  );
};

export default TvAnimation;
