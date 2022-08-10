import React from "react";
import '../App.css';
import productos from "./data/data";
import ItemList from "./ItemList";

function getProductos() {
    return new Promise( (resolve) => {
        setTimeout( () => resolve(productos), 3000)
    })
};

function ItemListContainer() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getProductos().then((respuesta) => {
            setData(respuesta);
        })
    }, []);
    
    return(
        <>
            <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer;