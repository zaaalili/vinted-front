import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <main>
      <div className="container">
        <h1>Offer Page</h1>
        <button>
          <Link to="/">Retourner sur la home</Link>
        </button>
      </div>
    </main>
  );
};

export default Offer;
