import React from "react";
import Item from "./Item";

function ItemList (props) {
    return (
        <>
        {props.data.map((producto) => {
            return (
                <Item
                    key={producto.id}
                    img={producto.img}
                    nombre={producto.nombre}
                    precio={producto.precio}
                />
            )
        })}
        </>
    )
}

export default ItemList;