import './App.css'
import Navbar from './componentes/Navbar' //El alias puede cambiar pero tiene que ser igual al que esté dentro de la función
import Main from './componentes/Main'
import Button from './componentes/Button'
import Products from './componentes/Productos'
import Card from './componentes/Card'
import Buttons from './componentes/Buttons'

function App() {
  const imgFashion = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
  const imgDark = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
  const imgCamel = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"

  return (
    <>
    <Navbar />
    <Main />
    <Button label='Traer información'/>
    <Button label='Enviar información'/>
    <Button label='Enviar información'/>
    <Button label='Enviar información'/>
    <Button label='Enviar información'/>
    <Button label='Enviar información'/>
    <Button label='Enviar información'/>
    <Button label='Enviar información'/>
    <Button label='Enviar información'/>
    <Button label='Enviar información'/>
    <Products
      img={imgFashion}
      name='Fashion'
      description="Tennis Fitness Running Purple"
      price="$1958"
    />
    <Products 
      img={imgDark}
      name="Dark"
      description="Tennis Dark Running"
      price="$2296"
    />
    <Products 
      img={imgCamel}
      name="Camel"
      description="Casual tennis"
      price="$3431"
    />
    <Products 
      img={imgDark}
      name="Dark-Grey"
      description="Casual tennis"
      price="$3000"
    />
    <Card />
    <br></br>
    <Buttons/>
    </>
  )
}

export default App
