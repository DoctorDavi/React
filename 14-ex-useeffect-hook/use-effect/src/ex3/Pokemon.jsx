import { useEffect, useState } from "react";

function Pokemon() {
  const URL = "https://pokeapi.co/api/v2/pokemon/mankey";
  const [src, setSrc] = useState("");

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(URL);
      const json = await response.json();

      const imgUrl = json.sprites.other["official-artwork"].front_default;

      setSrc(imgUrl);
    }
    getPokemon();
  }, []);

  // 1. On mount - go fetch mankey from api
  // 2. get the url for the img from the json response
  // 3. set the 'src' of our <img> to that url
  // 4. re-render our component with the new image

  return (
    <>
      <h1>Mankey</h1>
      <img src={src} />
    </>
  );
}

export default Pokemon;
