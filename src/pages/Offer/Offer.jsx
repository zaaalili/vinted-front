import "./offer.css";

// Import Packages
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const { id } = params;
  // console.log(params); // {id: '6afd8f5f13175474fd24fad6'}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`,
        );
        // console.log(response.data); // {_id: '6afd8f5f13175474fd24fad6', product_name: 'Vestido', product_description: 'Vestido camisero estampado, tegido fluido satinado, talla S.', product_price: 25, product_details: Array(4), …}
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);

  return (
    <main className="offer">
      <div className="container">
        {isLoading ? (
          <p>Chargement...</p>
        ) : (
          <>
            <img src={data.product_image.secure_url} alt="aperçu du produit" />
            <aside>
              <p>{data.product_price} €</p>
              {data.product_details.map((productDetail) => {
                const keys = Object.keys(productDetail);
                const keyName = keys[0];
                // console.log(keyName); // MARQUE / TAILLE / ÉTAT / COULEUR / EMPLACEMENT
                return (
                  <div key={keyName} className="product-infos">
                    <span>{keyName}</span>
                    <span>{productDetail[keyName]}</span>
                  </div>
                );
              })}
              <div className="product-infos-2">
                <h1>{data.product_name}</h1>
                <p>{data.product_description}</p>
              </div>
              <div className="owner-infos">
                <img src={data.owner.account.avatar.secure_url} alt="" />
                <span>{data.owner.account.username}</span>
              </div>
              <button>Acheter</button>
            </aside>
          </>
        )}
        {/* <button>
          <Link to="/">Retourner sur la home</Link>
        </button> */}
      </div>
    </main>
  );
};

export default Offer;
