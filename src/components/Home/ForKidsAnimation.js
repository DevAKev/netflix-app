import ForKids from "../../assets/images/for-kids-image.png";

const ForKidsAnimation = () => {
  return (
    <>
      <div className="for-kids-animation">
        <div className="for-kids-text__container">
          <h2 className="for-kids-text__title">
            Créez des profils pour les enfants
          </h2>
          <p className="for-kids-text__description">
            Les enfants découvrent de nouvelles aventures et retrouvent leurs
            personnages préférés dans un espace bien à eux, déjà inclus dans
            votre abonnement.
          </p>
          <img src={ForKids} alt="for-kids" />
        </div>
      </div>
    </>
  );
};

export default ForKidsAnimation;
