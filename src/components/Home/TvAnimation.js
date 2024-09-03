import Tv from "@assets/images/tv-icon.png";
const TvAnimation = () => {
  return (
    <>
      <div className="tv-text__container">
        <h2 className="tv-text__title">
          Vos films préférés directement sur votre TV grâce à Astreamia.
        </h2>
        <p className="tv-text__description">
          Astreamia vous aide à trouver de l'inspiration pour voir des films et
          séries sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV,
          lecteurs Blu-ray et bien plus.
        </p>
      </div>
      <div className="tv-animation">
        <img src={Tv} alt="tv" />
      </div>
    </>
  );
};

export default TvAnimation;
