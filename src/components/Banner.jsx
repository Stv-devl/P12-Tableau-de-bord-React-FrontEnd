import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <header>
      <nav className="horizontale-nav">
        <div className="logo-wrapper">
          <img src="" alt="" />
          <p className="nav-text-red">SportSee</p>
        </div>
        <p className="nav-text-white">Accueil</p>

        <Link to={`/home`}>
          <p className="nav-text-white">Profil</p>
        </Link>

        <p className="nav-text-white">Réglage</p>
        <p className="nav-text-white">Communauté</p>
      </nav>
    </header>
  );
};

export default Banner;
