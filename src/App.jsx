// Import components (Header, Main, Nav, etc) into App.jsx, which is mounted in main.jsx
import { useState, useEffect } from "react";

import "./App.css";
import { Logo } from "./components/logo.jsx";
import { SearchBar } from "./components/SearchBar.jsx";
import { PokemonArt } from "./components/PokemonArt.jsx";
import { PokemonInfo } from "./components/PokemonInfo.jsx";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/lopunny") //replace lopunny with user input
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPokemon(data);

        //Fetch species data using the URL in the first response
        return fetch(data.species.url);
      })
      .then((res) => {
        return res.json();
      })
      .then((speciesData) => {
        console.log(speciesData);
        setSpecies(speciesData);
      });
  }, []); // only run on first render

  return (
    <>
      <Logo />
      <SearchBar />
      <PokemonArt pokemon={pokemon} />
      <PokemonInfo pokemon={pokemon} species={species} />
    </>
  );
}

export default App;
