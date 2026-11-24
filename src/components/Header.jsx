// Import Packages
import { Link, useLocation } from "react-router-dom";

// Import Assets + Icons
import logo from "../assets/vinted-logo.png";
import { IoSearch } from "react-icons/io5";

const Header = ({ handleToken, userToken }) => {
  const location = useLocation();

  // Gestion de la route de retour : transmet la route courante dans le state de navigation pour la redirection post-login (exclut /signup et /login avec fallback sur "/")
  const from =
    location.pathname === "/signup" || location.pathname === "/login"
      ? location.state?.from || "/"
      : location.pathname;

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Vinted" />
        </Link>

        <div className="search-wrapper">
          <IoSearch />
          <input type="search" placeholder="Rechercher des articles" />
        </div>

        <div className="connection-buttons">
          {!userToken ? (
            // Utilisateur déconnecté : affiche inscription et connexion
            <>
              <Link to="/signup" state={{ from }}>
                <button>S'inscrire</button>
              </Link>
              <Link to="/login" state={{ from }}>
                <button>Se connecter</button>
              </Link>
            </>
          ) : (
            // Utilisateur connecté : affiche déconnexion (supprime le cookie via handleToken)
            <button
              onClick={() => {
                handleToken();
              }}
            >
              Se déconnecter
            </button>
          )}
        </div>

        <Link to="/publish">
          <button>Vends tes articles</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
