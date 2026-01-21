import { Routes, Route } from "react-router-dom";
import Navbar from "./LandingPage/Navbar.jsx";
import { Link } from "react-router-dom";
import Footer from "./LandingPage/Footer.jsx";
import Docs from "./LandingPage/Docs.jsx";
import Background from "./LandingPage/Background.jsx";
import "./Css/Navbar.css"
import "./Css/Footer.css"
import  './Css/Background.css'
const App = () => {
  return (
    <>
      <Navbar />
      <Footer />
      <Background />
      <Routes>
          <Route path = "/Docs" element = {<Docs />}></Route>
      </Routes>
      
    </>
  );
};

export default App;
