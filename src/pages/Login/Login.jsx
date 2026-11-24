import "./login.css";

// Import Packages
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

// Import Components
// SI LE TEMPS

const Login = ({ handleToken }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("location login =>", location); // location login => {pathname: '/login', search: '', hash: '', state: null, key: 'xv19wfw9', …}

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(email, password); // vérif des infos saisies dans les inputs : zzz@mail.com azerty
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        },
      );
      // console.log(response.data); // {_id: '6b05e325920eefcef629f739', token: 'v3dr_LuMZJTKAbyACga7d4FBdQ1LBpI8PLkqgRDCODf3zg_UMdcjOrqn-c8BcLgz', account: {…}}
      handleToken(response.data.token);
      // Redirection après connexion : renvoie vers la route d'origine (location.state.from) ou la page d'accueil (/) par défaut
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
      <main className="login">
        <div className="container">
          <h1>Se connecter</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="ex : johndoe@mail.com"
              value={email}
              id="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              id="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button>Se connecter</button>
          </form>
          <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
        </div>
      </main>
    </>
  );
};

export default Login;
