import { useState } from "react"

import '../styles/card.css'

export const Card = ({ image, title, description, price, handleAdd, handleDelete }) => {

    const [added, setAdded] = useState(false)

    const clickAdd = () =>{
        handleAdd()
        setAdded(true)
    }

    const clickRemove = () =>{
        handleDelete()
        setAdded(false)
    }

    return (
        <div className="tarjeta">
            <img src={image} alt={title} className="tarjeta-imagen"></img>
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{title}</h3>
                <p className="tarjeta-descripcion">{description}</p>
                <p className="tarjeta-precio">{price}</p>
                { added  ?
                    <button 
                    className="boton-quitar"
                    onClick={clickRemove}>Quitar del Carrito</button>
                    :
                    <button 
                    className="boton-agregar"
                    onClick={clickAdd}>Añadir al Carrito</button>
                }
            </div>


        </div>
    )
}
