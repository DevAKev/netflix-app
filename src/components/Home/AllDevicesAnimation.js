import AllDevices from "@assets/images/all-device-image.png";

const AllDevicesAnimation = () => {
  return (
    <>
      <div className="all-devices-animation">
        <img src={AllDevices} alt="all-devices" />
        <div className="all-devices-text__container">
          <h2 className="all-devices-text__title">Où que vous soyez</h2>
          <p className="all-devices-text__description">
            Regardez des films et des séries en accès illimité sur votre TV,
            smartphone, tablette et ordinateur.
          </p>
        </div>
      </div>
    </>
  );
};

export default AllDevicesAnimation;
