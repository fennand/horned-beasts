export default function SelectedBeast({ shownBeast, handleShowModal }) {
  return (
    <div className="modal" onClick={handleShowModal}>
      <h2>{shownBeast.title}</h2>
      <img src={shownBeast.imageUrl} />
      <h3>{shownBeast.description}</h3>
    </div>
  );
}
