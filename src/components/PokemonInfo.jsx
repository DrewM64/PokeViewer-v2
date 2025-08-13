import { useEffect } from "react";
import "./PokemonInfo.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function PokemonInfo({ pokemon, species }) {
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

  return (
    <div className="pokemonInfo">
      <figure className="cry">
        <audio
          id="cryAudio"
          src="https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/428.ogg"
        />
        <button id="playButton">Play cry</button>
      </figure>
      <p className="pokeId">
        <span className="number">#{!pokemon ? "???" : pokemon?.id}</span> -{" "}
        <span className="name">
          {!pokemon ? "MissingNo" : capitalizeFirstLetter(pokemon?.name)}
        </span>
      </p>
      <p>
        <span className="species">Rabbit Pokemon</span>
      </p>
      <div className="bioInfo">
        <p className="height">Height: 3'11"</p>
        <p className="weight">Weight: 73.4 lbs</p>
      </div>
      <p>
        Type: <span className="type">Normal</span>
      </p>
      <div className="dexInfo">
        <p>
          Lopunny is constantly monitoring its surroundings. If danger
          approaches, this Pokémon responds with superdestructive kicks.
        </p>
        <p>
          Once hot seasons are over, Lopunny’s coat will be replaced with fur
          that holds a lot of insulating air in preparation for colder weather.
        </p>
      </div>
    </div>
  );
}
