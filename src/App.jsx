import { React } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/pages/Homepage/Homepage";
import Footer from "./components/templates/Footer/Footer";
import Navigation from "./components/templates/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
