import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import data from "./assets/beast-data.json";
import { useState } from "react";
import SelectedBeast from "./components/SelectedBeast";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [shownBeast, setShownBeast] = useState({});
  const [horns, setHorns] = useState("");

  function handleShowModal(beast) {
    setShowModal(!showModal);
    setShownBeast(beast);
  }

  function handleFilter(event) {
    setHorns(event.target.value);
  }

  return (
    <div>
      <Header />
      <div>
        <h2>Filter by number of horns:</h2>
        <select onChange={handleFilter}>
          <option value="">All</option>
          <option value="1">1</option>
          <option value="1.5">1.5</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="24">24</option>
          <option value="294">294</option>
        </select>
      </div>
      <Gallery data={data} handleShowModal={handleShowModal} horns={horns} />
      <Footer />
      {showModal && (
        <SelectedBeast
          shownBeast={shownBeast}
          handleShowModal={handleShowModal}
        />
      )}
    </div>
  );
}

export default App;
