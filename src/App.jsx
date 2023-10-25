import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";
import beastData from "./assets/beast-data";
import { useState } from "react";

function App() {
  const [selectedBeast, setSelectedBeast] = useState(0);
  const [isModalShowing, setIsModalShowing] = useState(false);
  /* const [showModal, setShowModal] = useState(false);
  function handleShowModal() {
    setShowModal(!showModal);
  } */
  return (
    <div>
      {/* <button onClick={handleShowModal}>Show/Hide Image</button>
      {showModal && <Modal handleShowModal={handleShowModal} />} */}
      <Header />
      <Gallery
        setSelectedBeast={setSelectedBeast}
        setIsModalShowing={setIsModalShowing}
      />
      {isModalShowing ? (
        <Modal
          currentBeast={[selectedBeast]}
          setIsModalShowing={setIsModalShowing}
        ></Modal>
      ) : null}
      <Footer />
    </div>
  );
}

export default App;
