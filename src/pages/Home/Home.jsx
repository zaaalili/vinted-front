import "./home.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ offers }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log("useEffect");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers",
        );
        // console.log(response.data); // {count: 47, offers: Array(47)}
        setData(response.data);
        setIsLoading(false); // Passe isLoading à false une fois les données récupérées
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main className="home">
        <div className="container">
          {isLoading ? (
            <p>Chargement...</p>
          ) : (
            <section>
              {data.offers.map((offer) => {
                // console.log(offer); // = console.log(element)
                return (
                  <article key={offer._id}>
                    <div className="owner-infos">
                      {offer.owner.account.avatar && (
                        <img
                          src={offer.owner.account.avatar.secure_url}
                          alt="avatar de l'utilisateur"
                        />
                      )}
                      <span>{offer.owner.account.username}</span>
                    </div>

                    <Link to={`/offer/${offer._id}`}>
                      <div className="product-infos">
                        <img
                          src={offer.product_image.secure_url}
                          alt="image du produit"
                        />
                        <p>{offer.product_price} €</p>
                        {offer.product_details.map((productDetail) => {
                          return (
                            productDetail.TAILLE && (
                              <p>{productDetail.TAILLE}</p>
                            )
                          );
                        })}
                        {offer.product_details.map((productDetail) => {
                          return (
                            productDetail.MARQUE && (
                              <p>{productDetail.MARQUE}</p>
                            )
                          );
                        })}
                      </div>
                    </Link>
                  </article>
                );
              })}
            </section>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
