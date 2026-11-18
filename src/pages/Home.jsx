import { Link } from "react-router-dom";

const Home = ({ offers }) => {
  return (
    <>
      <main>
        <div className="container">
          <section>
            {/* <h1>Home Page</h1> */}
            {offers.map((offer) => {
              console.log(offers);
              return (
                <article>
                  <div className="owner-infos">
                    <img src={offer.owner.account.avatar.secure_url} alt="" />
                    <span>{offer.owner.account.username}</span>
                  </div>
                  <div className="product-infos">
                    <img src={offer.product_image.secure_url} alt=""></img>
                    <span>{offer.product_price} €</span>
                    {offer.product_details.map((element) => {
                      return element.TAILLE && <span>{element.TAILLE}</span>;
                    })}
                    {offer.product_details.map((element) => {
                      return element.MARQUE && <span>{element.MARQUE}</span>;
                    })}
                  </div>
                </article>
              );
            })}
          </section>
          {/* <button>
            <Link to="/offer">Voir toutes les offres</Link>
          </button> */}
        </div>
      </main>
    </>
  );
};

export default Home;
