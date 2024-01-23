import './App.css'
import Navbar from './componentes/Navbar' //El alias puede cambiar pero tiene que ser igual al que esté dentro de la función
import Main from './componentes/Main'
import Astros from './componentes/Astros'

function App() {

  return (
    <>
    <Navbar />
    <Main />
    <Astros />
    </>
  )
}

export default App
