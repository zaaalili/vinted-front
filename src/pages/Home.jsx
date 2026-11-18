import { Link } from "react-router-dom";

const Home = ({ offers }) => {
  return (
    <>
    <main>
      <div className="container">
        <main>
          <h1>Home Page</h1>
            {offers.map((element) => (
                console.log(offers)
                <section>
                    <article>
                        <span>user</span>
                        <img src="" alt=""></img>
                        <div className="article-infos">
                        <span>price</span>
                        <span>taille</span>
                        <span>marque</span>
                        </div>
                    </article>
                </section>
            ))}
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
