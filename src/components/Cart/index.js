import React from 'react'
import { useSelector } from 'react-redux'
import FilledCart from './FilledCart'
import EmptyCart from './EmptyCart'

const Cart = () => {


    const cart= useSelector(state => state.cartReducer);
  return (
    <div>
   { cart.cartItems.length > 0 ?
    <FilledCart /> : <EmptyCart />}
  
  </div>
  )
}

export default Cart