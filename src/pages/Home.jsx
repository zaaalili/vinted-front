import { Link } from "react-router-dom";

const Home = ({ offers }) => {
  return (
    <>
      <main>
        <div className="container">
          <main>
            {/* <h1>Home Page</h1> */}
            {offers.map((offer) => {
              console.log(offers);
              return (
                <article>
                  <div className="owner-infos">
                    <img src={offer.owner.account.avatar.secure_url} alt="" />
                    <span>{offer.owner.account.username}</span>
                  </div>
                  <img src={offer.product_image.secure_url} alt=""></img>
                  <div className="product-infos">
                    <span>{offer.product_price} €</span>
                    <span>{offer.product_details.TAILLE}</span>
                    <span>{offer.product_details.MARQUE}</span>
                  </div>
                </article>
              );
            })}
            <button>
              <Link to="/offer">Voir toutes les offres</Link>
            </button>
          </main>
        </div>
      </main>
    </>
  );
};

export default Home;
