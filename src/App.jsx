// Import components (Header, Main, Nav, etc) into App.jsx, which is mounted in main.jsx
import { useState, useEffect } from "react";

import "./App.css";
import { Logo } from "./components/logo.jsx";
import { SearchBar } from "./components/SearchBar.jsx";
import { PokemonArt } from "./components/PokemonArt.jsx";
import { PokemonInfo } from "./components/PokemonInfo.jsx";

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/lopunny")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  });
  return (
    <>
      <Logo />
      <SearchBar />
      <PokemonArt pokemon={pokemon} />
      <PokemonInfo />
    </>
  );
}

export default App;
