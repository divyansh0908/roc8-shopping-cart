import React, { useEffect } from "react";
import Products from "../Components/Products";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/product.action";
import { Loading } from "../Components/Loading";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    
    <div>
            <h2 className="heading">Welcome to the Shopping Cart</h2>
            <section>
                <h3>Products</h3>
                <Products />
            </section>
        </div>
    
  );
  
};

export default Home;
