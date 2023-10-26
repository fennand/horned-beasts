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

  function handleShowModal(beast) {
    setShowModal(!showModal);
    setShownBeast(beast);
  }

  return (
    <div>
      <Header />
      <DropDownList />
      <Gallery data={data} handleShowModal={handleShowModal} />
      <Footer />
      {showModal && (
        <SelectedBeast
          shownBeast={shownBeast}
          handleShownBeast={handleShowModal}
        />
      )}
    </div>
  );
  function DropDownList() {
    const [hornChoice, setHornChoice] = useState(false);
    return (
      <div>
        <button onClick={() => setHornChoice(!hornChoice)}>
          Toggle Dropdown list
        </button>
        {hornChoice && (
          <form>
            <label>
              Filter by number of horns:
              <select>
                <option name="One" value="1">
                  1
                </option>
                <option name="OneHalf" value="1.5">
                  1.5
                </option>
                <option name="Two" value="2">
                  2
                </option>
                <option name="Three" value="3">
                  3
                </option>
                <option name="Six" value="6">
                  6
                </option>
                <option name="TwentyFour" value="24">
                  24
                </option>
                <option name="TwoHundred" value="294">
                  294
                </option>
              </select>
            </label>
          </form>
        )}
      </div>
    );
  }
}

export default App;
