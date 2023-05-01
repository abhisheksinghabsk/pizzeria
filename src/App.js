import "./App.css";
import Mynavbar from "./components/Mynavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Mynavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
