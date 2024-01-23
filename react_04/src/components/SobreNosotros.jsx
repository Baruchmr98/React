import { Link } from "react-router-dom"


const Nosotros = () => {
    return (
        <>
        <div>
            <h1>
                Esta es la página Sobre Nosotros.
            </h1>
            <Link to='/'>
            Presiona aquí para ir a la página de Inicio.
            </Link>

            <br />

            <Link to='/contacto'>
            Presiona aquí para ir a la página Contacto.
            </Link>

        </div>

        </>
    )
}

export default Nosotros