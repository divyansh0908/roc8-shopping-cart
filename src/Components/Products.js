import React, {useEffect, useState} from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cart.action";

import ProductCard from "./ProductCard";

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product);
    const { availableProducts } = products;
    const handleAdd = (product) => {
        console.log("before")
        dispatch(addToCart(product));
        console.log("After")
    }
    
    
    
    return (
        <div className="productsWrapper">
        {
            availableProducts && availableProducts.map((product) => {
                return <ProductCard key={product.id} product={product} handleAdd={handleAdd}/>;
            })
            
        }
        </div>
    );
    }
export default Products;
