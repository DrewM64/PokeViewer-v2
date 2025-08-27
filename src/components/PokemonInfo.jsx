import { useEffect } from "react";
import "./PokemonInfo.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function PokemonInfo({ pokemon, species }) {
  var realFeet = pokemon?.height * 0.32808; //dm to decimal ft
  var feet = Math.floor(realFeet); // rounding decimal ft to whole number
  var inches = Math.round((realFeet - feet) * 12); //get inches as a whole number
  var weightInLbs = (pokemon?.weight * 0.22046).toFixed(2); //hg to lbs

  const latestFlavorTexts = species?.flavor_text_entries
    ?.filter((entry) => entry.language.name === "en") // only English
    .slice(-2) // last two entries
    .map((entry, index) => (
      <p key={index}>
        <em>{entry.flavor_text.replace(/\f|\n|\r/g, " ").trim()}</em>
      </p>
    ));

  useEffect(() => {
    const cryAudio = document.getElementById("cryAudio");
    const playButton = document.getElementById("playButton");

    if (cryAudio && playButton) {
      const toggleAudio = () => {
        if (cryAudio.paused) {
          cryAudio.play();
          playButton.textContent = "Pause";
        } else {
          cryAudio.pause();
          playButton.textContent = "Play cry";
        }
      };

      playButton.addEventListener("click", toggleAudio);

      cryAudio.onended = () => {
        playButton.textContent = "Play cry";
      };

      // Cleanup
      return () => {
        playButton.removeEventListener("click", toggleAudio);
      };
    }
  }, []);

  if (pokemon === null) return null; // nothing searched yet

  if (pokemon === false) {
    return (
      <div className="pokemonInfo">
        <p className="pokeId">
          <span className="number">#???</span> -{" "}
          <span className="name">MissingNo</span>
        </p>
        <p className="species">NotFound Pokemon </p>
        <div className="bioInfo">
          <p className="height">Height: ?'??"</p>
          <p className="weight">Weight: ??? lbs</p>
        </div>
        <p>
          Type: <span className="type">NotFound</span>
        </p>
        <div className="dexInfo">
          <p>
            <em>Pokemon info not found.</em>
          </p>
          <p>
            <em>Please double-check your search query.</em>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pokemonInfo">
      {pokemon && pokemon.cries?.latest && (
        <figure className="cry">
          <audio id="cryAudio" src={pokemon.cries.latest} />
          <button
            id="playButton"
            onClick={() => document.getElementById("cryAudio").play()}
          >
            Play cry
          </button>
        </figure>
      )}
      <p className="pokeId">
        <span className="number">
          #
          {
            species?.pokedex_numbers?.find(
              (num) => num.pokedex.name === "national"
            ).entry_number
          }
        </span>{" "}
        - <span className="name">{capitalizeFirstLetter(pokemon?.name)}</span>
      </p>
      <p className="species">
        {species?.genera.find((num) => num.language.name === "en").genus}{" "}
      </p>
      <div className="bioInfo">
        <p className="height">
          Height: {inches >= 12 ? feet + 1 : feet}'{inches >= 12 ? 0 : inches}"
        </p>
        <p className="weight">Weight: {weightInLbs} lbs</p>
      </div>
      <p className="types">
        Type:{" "}
        {pokemon?.types.map((typeInfo) => {
          const typeName = typeInfo.type.name.toLowerCase();
          return (
            <span key={typeName} className={`type ${typeName}`}>
              {capitalizeFirstLetter(typeName)}
            </span>
          );
        })}
      </p>
      <div className="dexInfo">{latestFlavorTexts}</div>
    </div>
  );
}
