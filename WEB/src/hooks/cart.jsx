import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext({});

function CartProvider({children}) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem(`@food-explorer:cart`)) || []);
    const [orders, setOrders] = useState([]);

    function handleAddDishToCart(data, quantity, image) {
        try {
            const {id, name, price} = data;

            const order = {id, name, price, image, quantity};

            setCart(prevCart => [...prevCart, order]);
        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                console.log("Could not add to cart:", error);
            }
        }

        alert("Cart added successfully");
    }

    const total = cart.reduce((value, item) => {
        return value + item.price;
    }, 0)

    function handleRemoveDishFromCart(dishId) {
        setCart(prevCart => prevCart.filter(item => item.id !== dishId));
    }

    function handleClearCart() {
        localStorage.removeItem(`@food-explorer:cart`);
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem(`@food-explorer:cart`, JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{cart, total: String(total.toFixed(2).replace('.', ',')), orders, setOrders, handleAddDishToCart, handleRemoveDishFromCart, handleClearCart}}>
            {children}
        </CartContext.Provider>
    )
}

function useCart() {
    const context = useContext(CartContext);
    return context;
}

export { CartProvider, useCart };