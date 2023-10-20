import { useState } from "react";

export default function () {
  const [image, setImage] = useState("");
  async function getImage() {
    const res = await fetch("https://api.waifu.pics/sfw/waifu");
    const data = await res.json();
    setImage(data.url);
  }

  return (
    <div>
      <h1>Anime image generator</h1>
      <img width="500px" src={image} />
      <button onClick={getImage}>generate</button>
    </div>
  );
}
