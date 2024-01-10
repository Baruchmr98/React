import './Products.css'

{/*
Se comenta esta línea de código por que es la que se usó para el props estructutrado.
const Products = (props) => { 
*/}

const Products = ({img, name, description, price}) => {
    return (
        <>
        {/* Agregando las propiedades directamente al componente, pero no se modifican las propiedades al importar el Componente en App.jsx, es decir, se repite la misma información.

        <div className="cards">
            <div className="products--card">
                <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933" alt="" />
                <h3>Fashion</h3>
                <p>Tennis Fitness Running Purple</p>
                <h4>$1958</h4>
            </div>
        </div>
        
        */}

        {/* Props estructurados. Puedo asignar diferentes propiedades a un div, sin tene que generar muchos props, solamente usando la palabra reservada 'props' como parámetro de la función 
        Quiero modificar varias propiedades, puedo mandar a llamar las porps dentro de cada elmento, como si fueran métodos*/}

        {/*
        <div className="cards">
            <div className="products--card">
                <img src={props.img} alt="sneakers" />
                <h3>
                    {props.name}
                </h3>
                <p>
                    {props.description}
                </p>
                <h4>
                    {props.price}
                </h4>
            </div>
        </div>
        */}

        
        {/* Propts desestructurados
        Permite aplicar datos a un objeto a una variable separada para que dicha varibale pueda contener los datos provenientes del objeto.
        ->No utilizamos 'props' como parámetro de la función, sino que asignamos parámetros a cada elemento y los llamamos directamente en dichos elementos.
        -> Los props desestructurados viven como parámetros, pero entre llaves, y se les asigna un nombre específico
        */}
        <div className="cards">
            <div className="products--card">
                <img src={img} alt="sneakers" />
                <h3>
                    {name}
                </h3>
                <p>
                    {description}
                </p>
                <h4>
                    {price}
                </h4>
            </div>
        </div>
        </>
    )
}

export default Products