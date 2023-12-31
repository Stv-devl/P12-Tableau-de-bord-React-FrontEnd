import { Link } from "react-router-dom";

/**
 * The component represent the horizontal nav on the top of the project .
 * @returns {JSX.Element} - The header element containing the navigation bar with logo and links.
 */

const Banner = () => {
  return (
    <header>
      <nav className="horizontale-nav">
        <div className="logo-wrapper">
          <img
            src="../logo.png"
            alt="logo_sportsee"
            className="logo_sportsee"
          />
          <p className="nav-text-red">SportSee</p>
        </div>

        <p className="nav-text">Accueil</p>

        <Link to={`/home`}>
          <p className="nav-text active">Profil</p>
        </Link>

        <p className="nav-text">Réglage</p>
        <p className="nav-text">Communauté</p>
      </nav>
    </header>
  );
};

export default Banner;
