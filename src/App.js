import Header from "./componants/header/Header";

import Home from "./pages/homepage/Home";
import Footer from "./componants/footer/Footer";
import AboutMe from "./pages/aboutpage/AboutMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shoppage/Shop";
import Contact from "./pages/contactpage/Contact";
import NavBar from "./componants/navbar/NavbarIo";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutMe />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
