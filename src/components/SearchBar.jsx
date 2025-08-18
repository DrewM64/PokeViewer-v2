import { useState, useEffect } from "react";
import "./SearchBar.css";

export function SearchBar({ onSearch }) {
  // const [pokemonName, setPokemonName] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1); // highlight for keyboard nav

  // Fetch Pokémon names once
  const [allPokemon, setAllPokemon] = useState([]);
  useEffect(() => {
    async function fetchPokemonList() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000");
      const data = await res.json();
      setAllPokemon(data.results.map((p) => p.name));
    }
    fetchPokemonList();
  }, []);

  // Filter results when query changes
  useEffect(() => {
    if (query.length > 2) {
      const filtered = allPokemon.filter((name) =>
        name.toLowerCase().startsWith(query.toLowerCase())
      );
      setResults(filtered.slice(0, 10)); // show up to 10 results
    } else {
      setResults([]);
    }
    setActiveIndex(-1);
  }, [query, allPokemon]);

  // Handle selection (click, Enter, etc.)
  const handleSelect = (name) => {
    setQuery(name);
    setResults([]);
    setActiveIndex(-1);
    onSearch(name); // Pass up to parent
  };

  // Keyboard handling
  const handleKeyDown = (e) => {
    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0) {
        handleSelect(results[activeIndex]);
      } else {
        handleSelect(query); // fallback: search typed name
      }
    }
  };

  return (
    <div className="search-container" style={{ position: "relative" }}>
      <input
        type="text"
        value={query}
        placeholder="Search Pokémon..."
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {results.length > 0 && (
        <ul
          className="results-box"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "white",
            border: "1px solid #ccc",
            zIndex: 10,
            listStyle: "none",
            margin: 0,
            padding: 0,
            color: "black",
          }}
        >
          {results.map((name, i) => (
            <li
              key={name}
              onClick={() => handleSelect(name)}
              style={{
                padding: "0.5rem",
                background: i === activeIndex ? "#eee" : "transparent",
                cursor: "pointer",
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  /* Search w/o autocomplete
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
  */
}
