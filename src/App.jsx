// Import components (Header, Main, Nav, etc) into App.jsx, which is mounted in main.jsx
import { useState, useEffect } from "react";

import "./App.css";
import { Logo } from "./components/logo.jsx";
import { SearchBar } from "./components/SearchBar.jsx";
import { PokemonArt } from "./components/PokemonArt.jsx";
import { PokemonInfo } from "./components/PokemonInfo.jsx";

function App() {
  const [pokemonName, setPokemonName] = useState("lopunny");
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    if (!pokemonName) return;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`) //replace lopunny with user input
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
      })
      .catch((err) => {
        console.error("Error fetching Pokemon", err);
        setPokemon(false);
        setSpecies(null);
      });
  }, [pokemonName]); // Re-run on change to pokemonName

  return (
    <>
      <Logo />
      <SearchBar onSearch={setPokemonName} />
      <PokemonArt pokemon={pokemon} />
      <PokemonInfo pokemon={pokemon} species={species} />
    </>
  );
}

export default App;
