import React, {useState} from 'react'
import firestoreDB from "../../services/firestore"
import { cartContext } from '../../store/cartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import {getDocs, collection, addDoc, query, Timestamp, doc} from "firebase/firestore";

function UserForm() {
    const {cart, clearCart} = useContext(cartContext);

    const [userData, setUserData] = useState({
      nombre:"",
      telefono:"",
      email:"",
    })

    const [orderFirebase, setOrderFirebase] = useState({
      id: '',
      complete: false,
    });

    let total = 0
    console.log(total)
    /* cart.forEach((item) => { total += item.precio * item.cantidad}) */

    const ordenDeCompra = {
      buyer: {...userData},
      items: [...cart],
      total: total, 
      date: new Date()
    }

    async function handleSubmit(evt) {
      evt.preventDefault();    
      const colecctionref = collection(firestoreDB, "orders")
      const docRef = await addDoc(colecctionref, ordenDeCompra)
      
    }
    
    function inputChangeHandler(evt) {
      const input = evt.target;
      const value = input.value;
      const inputName = input.name;

      let copyUserData = { ...userData };
      copyUserData[inputName] = value;
      setUserData(copyUserData);

      }

      function handleReset(evt) {
        setUserData({
          name: "",
          email: "",
          telefono: "",
        });
      }

    return (
      <aticle>
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <h1 className='card-title'> Finalizando la compra </h1>
            <form className='m-3 p-3 card d-flex flex-column text-center gap-1' onSubmit={handleSubmit}>
                <legend className='label'> Complete los datos</legend>
                <label className='label' htmlFor='name'> Nombre </label>
                <input className='formInput' type="text" name='name' value={userData.nombre} onChange={inputChangeHandler} required></input>
                <label className='label' htmlFor="phone">Teléfono</label>
                <input className='formInput' type="number" name='phone' value={userData.telefono} onChange={inputChangeHandler} required></input>
                <label className='label' htmlFor="email">Email</label>
                <input className='formInput' type="email" name='email' value={userData.email} onChange={inputChangeHandler} required></input>
                <input className='buttonForm p-1' type="submit" value='Comprar'></input>
            </form>
        </div>
      </aticle>
    );

}


export default UserForm