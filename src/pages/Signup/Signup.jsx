import "./signup.css";

// Import Packages
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

// Import Components
// SI LE TEMPS

const Signup = ({ handleToken }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(username, email, password); // vérif des infos saisies dans les inputs : test2 test2@mail.fr azerty
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        },
      );
      // console.log(response.data); // {_id: '6b05d210920eefcef629f70f', email: 'test0@mail.com', token: 'fkOXVkRo-faGOqQt9kDXeQuA0VrWVZ1Vu4hyruav3uSngn-fHIn_UCrCwq5W20Y0', account: {…}}
      handleToken(response.data.token);
      // Redirection après inscription : renvoie vers la route d'origine (location.state.from) ou la page d'accueil (/) par défaut
      if (location.state) {
        navigate(location.state.from);
      } else {
        navigate("/");
      }
    } catch (error) {
      error.response
        ? setErrorMessage(error.response.data.message)
        : setErrorMessage(error.message);
    }
  };

  return (
    <>
      <main className="signup">
        <div className="container">
          <h1>S'inscrire</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={username}
              id="username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              type="email"
              placeholder="ex : johndoe@mail.com"
              value={email}
              id="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            {errorMessage && <p className="error">{errorMessage}</p>}
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              id="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <div className="newsletter-checkbox">
              <input
                type="checkbox"
                name="newsletter"
                checked={newsletter}
                id="newsletter"
                onChange={(event) => {
                  setNewsletter(event.target.checked);
                }}
              />
              <label htmlFor="newsletter">S'inscrire à notre newsletter</label>
            </div>
            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
            <button>S'inscrire</button>
          </form>
          <Link to="/login" state={{ from: location.state?.from || "/" }}>
            Tu as déjà un compte ? Connecte-toi !
          </Link>
        </div>
      </main>
    </>
  );
};

export default Signup;
