import React from "react";
import '../App.css';
import productos from "./data/data";
import ItemList from "./ItemList";

function getProductos() {
    return new Promise( (resolve) => {
        setTimeout( () => resolve(productos), 3000)
    })
};

function ItemListContainer(props) {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getProductos().then((respuesta) => {
            setData(respuesta);
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);

    return(
        <>
        <h2 className='ItemListCont'>{props.greeting}</h2>
        <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer;