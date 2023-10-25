export default function Modal({ currentBeast, setIsModalShowing }) {
  function handleModalClick() {
    setIsModalShowing(false);
  }

  return (
    <div className="Modal" onClick={handleModalClick}>
      <div className="Modal-Content">
        <img src={currentBeast.imageUrl} alt={currentBeast.title} />
        <p>{currentBeast.description}</p>
      </div>
    </div>
  );
}
