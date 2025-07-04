import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="MainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/contact" element={<ContactForm/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
