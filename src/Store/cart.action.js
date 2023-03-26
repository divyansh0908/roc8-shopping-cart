import { cartActions } from "./cart.slice";
import { baseURL } from "../utils/baseURL";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
        const response = await fetch(
            `${baseURL}api/cart`
        );
    
        if (!response.ok) {
            throw new Error("Could not fetch cart data!");
        }
    
        const data = await response.json();
    
        return data;
        };
    
        try {
        const cartData = await fetchData();
        // console.log("cartData", cartData);
        dispatch(cartActions.setCart(cartData))
        
        
        } catch (error) {
        console.log(error);
        }
    };
    } 
export const addToCart = (cart) => {
    
    return async (dispatch) => {
        const sendRequest = async () => {
        const response = await fetch(`${baseURL}api/cart`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            productId: cart.id,
            quantity: 1
            }),
        });
    
        if (!response.ok) {
            throw new Error("Sending cart data failed.");
        }
        };
    
        try {
        await sendRequest();
        dispatch(fetchCartData());
        } catch (error) {
        console.log(error);
        }
    };
    };
export const removeFromCart = (cart) => {


    return async (dispatch) => {
        const sendRequest = async () => {
        const response = await fetch(`${baseURL}api/cart/${cart.id}`, {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            
            }),
        });
    
        if (!response.ok) {
            throw new Error("Sending cart data failed.");
        }
        };
    
        try {
        await sendRequest();
        dispatch(fetchCartData());
        } catch (error) {
        console.log(error);
        }
    };
    };

export const updateCart = (cart) => {
 
    return async (dispatch) => {
        const sendRequest = async () => {
        const response = await fetch(`${baseURL}api/cart/${cart.productId}/${cart.count}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            
        });
    
        if (!response.ok) {
            throw new Error("Sending cart data failed.");
        }
        };
    
        try {
        await sendRequest();
        dispatch(fetchCartData());
        } catch (error) {
        console.log(error);
        }
    };
    }