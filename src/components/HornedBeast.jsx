import { useState } from "react";

export default function HornedBeast({ title, imageUrl, description }) {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} onClick={handleClick} />
      <p>{description}</p>
      <p>❤ {likes}</p>
    </div>
  );
}
