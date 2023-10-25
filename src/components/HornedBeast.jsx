import { useState } from "react";

export default function HornedBeast({
  index,
  title,
  imageUrl,
  description,
  setSelectedBeast,
  setIsModalShowing,
}) {
  const [likes, setLikes] = useState(0);

  function handleLikesClick() {
    setLikes(likes + 1);
  }

  function handleImageClick() {
    setSelectedBeast(index);
    setIsModalShowing(true);
  }
  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} onClick={handleImageClick} />
      <p>{description}</p>
      <p onClick={handleLikesClick}>❤ {likes}</p>
    </div>
  );
}
