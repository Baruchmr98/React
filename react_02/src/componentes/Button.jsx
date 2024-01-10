import './Button.css'

/*
Props. Propierades que se pueden asignar a los componentes para modificar el texto, la información dese la renderización del mismo. 
->Se asignan parámetro de la función con el nombre del prop y debe ir entre llaves.
->Se manda a llamar en el bloque de código donde se debe implementar utilizando llaves
*/

const Button = ({label}) => {
    return (
        <>
        <div className='button--container'>
            <button>
                {label}
            </button>
        </div>
        </>
    )
}

export default Button