import { useState } from "react";
import "./SearchBar.css";

export function SearchBar({ onSearch }) {
  const [pokemonName, setPokemonName] = useState("");

  function handleSubmit(e) {
    // Prevent browser from reloading page
    e.preventDefault();

    if (pokemonName.trim()) {
      onSearch(pokemonName.trim());
      setPokemonName(""); // clear input after search
    }
  }
  return (
    <form className="searchInput" onSubmit={handleSubmit}>
      <label>
        I choose you:
        <input
          id="pokemonName"
          type="text"
          placeholder="Pokemon Name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button id="search" type="submit">
          🔎
        </button>
      </label>
    </form>
  );
}
