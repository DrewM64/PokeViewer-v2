import './SearchBar.css'

export function SearchBar() {
    return (
        <div className='searchInput'>
            <label>I choose you: </label>
                <input id="pokemonName" type="text" placeholder="Pokemon Name" />
                <button id="search">🔎</button>
        </div>
    )
}