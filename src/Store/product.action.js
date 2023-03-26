import { baseURL } from "../utils/baseURL";
import { productActions } from "./product.slice";

export const fetchProducts = () => {
    
    return async dispatch => {
        const response = await fetch(`${baseURL}api/products`);
        const responseData = await response.json();
        const loadedProducts = [];
        for (const key in responseData) {
            loadedProducts.push({
                id: responseData[key]._id,
                name: responseData[key].name,
                description: responseData[key].description,
                unitPrice: responseData[key].unitPrice,
                quantity: responseData[key].quantity,
                image: responseData[key].image

            });
        }
        // console.log(loadedProducts);
        dispatch(productActions.setAvailableProducts(loadedProducts));
        
    };
};

export const addProduct = (name, description, unitPrice, quantity, image) => {
    return async dispatch => {
        const response = await fetch(`${baseURL}api/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: name,
                description: description,
                price: unitPrice,
                quantity: quantity,
                image: image
            })
        });
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error(responseData.message);
        }else{
        dispatch(fetchProducts());
        }
    };
    
};