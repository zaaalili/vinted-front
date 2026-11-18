import { Link } from "react-router-dom";
import logo from "../assets/vinted-logo.png";
import { IoSearch } from "react-icons/io5";

// Le composant link a besoin d'une props "to" pour savoir vers quelle page il redirige !
const Header = () => {
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
          <button>S'inscrire</button>
          <button>Se connecter</button>
        </div>
        <button>Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
