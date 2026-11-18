import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <main>
      <div className="container">
        <img>img product</img>

        <div>
          <span>price</span>
          <span>MARQUE</span>
          <span>TAILLE</span>
          <span>ÉTAT</span>
          <span>COULEUR</span>
          <span>EMPLACEMENT</span>
        </div>
        <div>
          <h1>title</h1>
          <span>description</span>
          <img>avatar owner</img>
          <span>owner username</span>
          <button>Acheter</button>
        </div>
        {/* <button>
          <Link to="/">Retourner sur la home</Link>
        </button> */}
      </div>
    </main>
  );
};

export default Offer;
