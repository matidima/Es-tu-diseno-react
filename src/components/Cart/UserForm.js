import React, {useState} from 'react'
import firestoreDB from "../../services/firestore"
import { cartContext } from '../../store/cartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {collection, addDoc} from "firebase/firestore";

function UserForm() {
    const {cart, clearCart} = useContext(cartContext);

    let navigate = useNavigate()

    const [userData, setUserData] = useState({})

    let total = 0
    cart.forEach((item) =>  total += item.precio * item.quantity)

    const ordenDeCompra = {
      buyer: {...userData},
      items: [...cart],
      total: total, 
      date: new Date()
    }

    async function handleSubmit(evt) {
      evt.preventDefault();    
      const colecctionref = collection(firestoreDB, "orders")
      const orden = await addDoc(colecctionref, ordenDeCompra)
      setUserData(orden.id);
      clearCart();
      navigate("/compraTerminada")
    }
    
    function inputChangeHandler(evt) {
      const input = evt.target;
      const value = input.value;
      const inputName = input.name;

      let copyUserData = { ...userData };
      copyUserData[inputName] = value;
      setUserData(copyUserData);

      }

    return (
        <main>
            <div className='formContainer'>
                <h1 className='formH1'> Finalizando la compra </h1>
                <form className='form' onSubmit={handleSubmit}>
                    <legend className='label'> Complete los datos</legend>
                    <label className='label' htmlFor='name'> Nombre </label>
                    <input className='formInput' type="text" name='nombre' value={setUserData.nombre} onChange={inputChangeHandler} required></input>
                    <label className='label' htmlFor="phone">Teléfono</label>
                    <input className='formInput' type="number" name='telefono' value={setUserData.telefono} onChange={inputChangeHandler} required></input>
                    <label className='label' htmlFor="email">Email</label>
                    <input className='formInput' type="email" name='email' value={setUserData.email} onChange={inputChangeHandler} required></input>
                    <input className='buttonForm' type="submit" value='Comprar'></input>
                </form>
            </div>
        </main>
      )
}


export default UserForm