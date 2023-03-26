import React, {useEffect, useState} from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cart.action";

import ProductCard from "./ProductCard";

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const { availableProducts } = products;

  useEffect(() => {
    console.log("useEffect");
    if (availableProducts && availableProducts.length > 0){

        setAllProducts(availableProducts);
    }
    }, [availableProducts]);
  const handleAdd = (product) => {
    console.log("before");
    dispatch(addToCart(product));
    console.log("After");
  };

  return (
    <div className="container">
        <div className="search my-4">
            <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-md p-2"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setAllProducts(
                        availableProducts.filter((product) =>
                            product.name.toLowerCase().includes(e.target.value.toLowerCase())
                        )
                    );
                }}
            />
        </div>
<div className="flex flex-row w-full">
        
      {allProducts &&
        allProducts.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              handleAdd={handleAdd}
            />
          );
        })}
        </div>
    </div>
  );
};
export default Products;
