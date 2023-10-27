import { useState } from "react";

export default function HornedBeast({
  title,
  imageUrl,
  description,
  horns,
  handleShowModal,
}) {
  const [likes, setLikes] = useState(0);

  function handleLikesClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h2>{title}</h2>
      <img
        src={imageUrl}
        alt={title}
        onClick={() => handleShowModal({ title, imageUrl, description })}
      />
      <p>{description}</p>
      <p>Horns: {[horns]}</p>
      <p onClick={handleLikesClick}>❤ {likes}</p>
    </div>
  );
}
