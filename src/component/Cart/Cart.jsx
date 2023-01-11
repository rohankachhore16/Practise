import React  from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { remove } from '../../redux/Slice/CartSlice';
const Cart = () => {
    const dispatch= useDispatch();
    const products = useSelector((state)=> state.cart)
    const removeItem =(productsId) =>{
dispatch(remove(productsId))
    }
  return (
    <>
<h3>cart</h3>
<div className="cartWrapper">
    {
        products.map(products  =>(
            <div className="cartCard" key={products.id}>
            <img src={products.image} alt="" />
            <h4>{products.title}</h4>
<h5>{products.price}</h5>
<button onClick={()=> removeItem(products.id)} className="btn">Remove</button>
</div>
        ))
    }
</div>
    </>
  )
}

export default Cart
