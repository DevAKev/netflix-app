const Banner = () => {
  return (
    <div className="home-presentation">
      <h1 className="home-title">Films et séries en illimité, et bien plus</h1>
      <p className="home-subtitle">Où que vous soyez. Annulez à tout moment.</p>
      <p className="home-subtitle-2">
        Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
        abonner ou réactiver votre abonnement.
      </p>
      <input
        type="email"
        className="input-email"
        placeholder="Adresse e-mail"
      />
      <button className="input-button">Commencer</button>
    </div>
  );
};

export default Banner;
