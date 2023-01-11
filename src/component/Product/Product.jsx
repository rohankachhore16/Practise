import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { productAsync } from '../../redux/asyncThunk/productAsync';
import { THUNK_STATUS } from '../../redux/constant';
import { add } from '../../redux/Slice/CartSlice';
// import { productAsync, STATUS } from '../../redux/Slice/productSlice';




const Product = () => {
    const dispatch = useDispatch();

    const productData = useSelector((state) => state.products.data)
    // console.log(productData);

    useEffect(() => {
        dispatch(productAsync());
  
    }, []);
    const handalAdd = (products) => {
        dispatch(add(products));
    };
    
    
    return (
        <>
            <div className='productsWrapper'>
                {productData.map(products => (
                    
                    <div className='card' key={products.id}>
                        <img src={products.image} alt="" />
                        <h4>{products.title}</h4>
                        <h5>{products.price}</h5>
                        <button onClick={() => handalAdd(products)} className="btn" >Add to cart</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Product
