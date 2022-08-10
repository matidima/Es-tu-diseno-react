import React from "react";
import '../App.css';
import productos from "./data/data";
import ItemDetail from "./ItemDetail";

function getProducto() {
    return new Promise( (resolve) => {
        setTimeout( () => resolve(productos[0]), 3000)
    })
};  

function ItemDetailContainer(props) {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getProducto().then((respuesta) => {
            setData(respuesta);
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);

    return(
        <>
        <h2 className='ItemListCont'>{props.greeting}</h2>
        <ItemDetail img={data.img} nombre={data.nombre} precio={data.precio}/>
        </>
    )
}

export default ItemDetailContainer;