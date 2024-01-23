import './Astros.css'
import { useEffect, useState } from 'react';
import Astro from './Astro';

//Componente para agregar la información de la API Astros dentro de las cards.
const Astros = () => {
    const ASTROS_URL = 'http://api.open-notify.org/astros.json'

    //Implementando useState y useEffect
    const [astros, setAstros] = useState([]);
    useEffect(() => {
        fetchAstros(); 
    }, [])

    //Crear función fetch para conectarse a la API
    const fetchAstros = () => {
        fetch(ASTROS_URL)
            .then(response => response.json())
            .then(data => setAstros(data.people)) //Para que la información viva dentro del componente actualizado, traigo setAstros y le paso los datos de `people` de la API
            .catch(error => console.error(error))
    }

    console.log(astros); //Vive en consola del navegador
    
    //Enviar la información a las cards utilizando '.map' sobre el array 'astros'.
    return (
        <>
            {
                //'astro' funciona como los elementos que se recorren en el array 'astros' y '.map' recibe dichos elementos, más un 
                astros.map((astro, index) => (
                    //Exporto el componente Astro
                    //Crear una llave única para cada elemento del array (key)
                    //Desestructurar el array para que cada elemento reciba los props definidos dentro de Astro ({name, craft})
                    <Astro key={ index } {...astro} />
                ))
            }
        </>
    )
}

export default Astros;