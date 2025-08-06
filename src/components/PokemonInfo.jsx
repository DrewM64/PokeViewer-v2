export function PokemonInfo() {
    return (
        <div className="pokemonInfo">
            <p className="number">#428</p><p className="name">Lopunny</p>
            <p><span className="species">Rabbit</span> Pokemon</p>
            <figure className="cry">
                <figcaption>Cry:</figcaption>
                <audio controls controlsList="play" src="https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/428.ogg" />
            </figure>
            <p className="height">Height: 3'11"</p>
            <p className="weight">Weight: 73.4 lbs</p>
            <p>Type: <span className="type">Normal</span></p>
            <div className="dexInfo">
                <p>Lopunny is constantly monitoring its surroundings. If danger approaches, this Pokémon responds with superdestructive kicks.</p>
                <p>Once hot seasons are over, Lopunny’s coat will be replaced with fur that holds a lot of insulating air in preparation for colder weather.</p>
            </div>
        </div>
    )
}