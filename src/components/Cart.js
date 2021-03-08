import React,{useContext} from 'react'
import {CartContext} from '../global/CartContext'

const Cart=()=>{
    const data=useContext(CartContext)
    console.log(data);
    return(
        <div className='container'>
            <div className='cart-container' style={{marginTop:'100px'}}>
                  <h2>This is Cart</h2>
            </div>
        </div>
    )
}

export default Cart