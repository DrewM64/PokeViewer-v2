import "./PokemonArt.css";
// import lopunny from "../assets/lopunny.png";

export function PokemonArt({ pokemon }) {
  if (!pokemon) return <p>Pokemon not found...</p>;
  return (
    <div className="pokemonArt">
      <img
        src={pokemon.sprites.other?.["official-artwork"]?.front_default}
        alt={pokemon.name}
      />
    </div>
  );
}
