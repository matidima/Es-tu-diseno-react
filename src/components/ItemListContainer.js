import React, {useState, useEffect}from "react";
import '../App.css';
import productos from "./data/data";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";

function getProductos() {
    return new Promise( (resolve) => {
        setTimeout( () => resolve(productos), 3000)
    })
};

function ItemListContainer(){
    let { idCategory } = useParams();
    const [data, setData] = useState([]);
    
    useEffect(()=> {
        getProductos().then((respuesta) => {
            let filters = respuesta.filter ((element)=> element.category === idCategory);
            console.log(filters)
            if(idCategory === undefined) {
                setData(respuesta); 
            } else {
                setData(filters);
                
            }
    });
    }, [idCategory]);

    return(
        <>
            <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer;