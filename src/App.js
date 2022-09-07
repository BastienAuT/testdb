import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Projets from "./components/Projets";
import Footer from "./components/Footer";
import Cv from "./components/Cv";

import "./styles.scss";
import "./styles/index.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Projets />} />
        <Route path="cv" element={<Cv />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
