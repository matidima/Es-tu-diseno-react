import React from "react";
import Item from "./Item";

function ItemList ({data}) {
    return (
        <section>
            <>
                <h2>Productos</h2>
                <article>
                    {data.map((producto) => {
                        return (
                            <Item
                                    key={producto.id}
                                    id={producto.id}
                                    img={producto.img}
                                    nombre={producto.nombre}
                                    precio={producto.precio}
                                />
                        )
                    })}
                </article>
            </>
        </section>
    )
}

export default ItemList;