import Download from "@assets/images/mobile-stranger-box.jpg";

const DownloadAnimation = () => {
  return (
    <>
      <div className="download-animation">
        <img src={Download} alt="download" />
        <div className="download-text__container">
          <h2 className="download-text__title">
            Téléchargez vos séries pour les regarder hors connexion
          </h2>
          <p className="download-text__description">
            Regardez Netflix dans l'avion, le train, le sous-marin…
          </p>
        </div>
      </div>
    </>
  );
};

export default DownloadAnimation;
