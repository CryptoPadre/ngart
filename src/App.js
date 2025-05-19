import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
          <Route path="/gallery" element={<h1>Gallery</h1>} />
          <Route path="/gallery" element={<h1>About</h1>} />
          <Route path="/gallery" element={<h1>Contact</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
