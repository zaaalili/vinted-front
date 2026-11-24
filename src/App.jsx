import "./App.css";

// Import Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
// import axios from "axios";

// Import Pages
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
// import Publish from "./pages/Publish/Publish";

// Import Components
import Header from "./components/Header";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 42 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <>
      <Router>
        <Header handleToken={handleToken} userToken={userToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route
            path="/signup"
            element={<Signup handleToken={handleToken} />}
          />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
          {/* <Route path="/publish" element={<Publish />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
