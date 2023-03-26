import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Components/Navigation';
import store from "./Store";
import AddProduct from './Pages/AddProduct';
import { Provider } from "react-redux";
import { fetchCartData } from './Store/cart.action';
import { fetchProducts } from './Store/product.action';
import { ProductInfo } from './Pages/ProductInfo';



function App() {
  useEffect(() => {
    store.dispatch(fetchProducts());
    store.dispatch(fetchCartData());


  }, []);
  return (
    <div className='App'>
      <Provider store={store}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path="/product/:id" element={<ProductInfo />} />

        </Routes>
      </BrowserRouter>
      </Provider>
 </div>
  );
}

export default App;
