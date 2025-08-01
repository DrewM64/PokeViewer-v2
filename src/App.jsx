// Import components (Header, Main, Nav, etc) into App.jsx, which is mounted in main.jsx 

import './App.css'
import { Logo } from './components/logo.jsx'
import { SearchBar } from './components/SearchBar.jsx'
import { PokemonArt } from './components/PokemonArt.jsx'
import { PokemonInfo } from './components/PokemonInfo.jsx'

function App() {
  return (<>
    <Logo />
    <SearchBar />
    <PokemonArt />
    <PokemonInfo />
  </>
  )
}

export default App
