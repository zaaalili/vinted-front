import { useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect");
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers",
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false); // passer isLoading à false une fois les données récupérées
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <p>coucou</p>
    </>
  );
}

export default App;
