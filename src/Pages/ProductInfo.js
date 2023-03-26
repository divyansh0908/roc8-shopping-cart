import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CounterStrip from '../Components/Counter';
import { baseURL } from '../utils/baseURL';

import { addToCart } from "../Store/cart.action";



export const ProductInfo = () => {
    // get slug from url
    const [productInfo, setProductInfo] = useState(null);
    const { id } = useParams();
    const product = useSelector((state) => state.product);
    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    // console.log(product);
    const count = items.find((item) => item.product?._id === productInfo?.id);
    const handleAdd = (product) => {
      console.log("before");
      console.log(items);
      dispatch(addToCart(productInfo));
      console.log("After");
    };
    // const selectedProduct = product? product.availableProducts.find((item) => item.id === id): null;
    
    useEffect(() => {
        console.log("useEffect");
        
        console.log(product);

        if (product) {
            const selectedProduct = product?.availableProducts?.find((item) => item.id === id) || null;
            console.log(selectedProduct);
            setProductInfo(selectedProduct);
            // setProductInfo(product);
        }
    },[product]);

    
    console.log(id);

    // get product from redux store


    return (
<section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={baseURL+productInfo?.image}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productInfo?.name}</h1>
        <div className="flex mb-4">
         
          
        </div>
        <p className="leading-relaxed">{productInfo?.description}</p>
        
        <div className="flex justify-between">
          <span className="title-font font-medium text-2xl text-gray-900">Rs. {productInfo?.unitPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="title-font font-medium text-2xl text-gray-900">Quantity. {productInfo?.quantity}</span>
        </div>
        {!count ? (
        <button onClick={() => handleAdd(product)} className="bg-blue-600 rounded-md mx-2 px-4 py-2">
          Add to cart
        </button>
      ) : (
        <div className='w-100'>
                
        
        <CounterStrip product={productInfo} />
        </div>
      )}
      </div>
      
    </div>
  </div>
</section>
    );
}