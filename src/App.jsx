// Import components (Header, Main, Nav, etc) into App.jsx, which is mounted in main.jsx 

import './App.css'
import { Logo } from './components/logo.jsx'
import { SearchBar } from './components/SearchBar.jsx'

function App() {
  return (<>
    <Logo />
    <SearchBar />
  </>
  )
}

export default App
