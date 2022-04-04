import { createContext, useState } from "react";

export const Shop = createContext();

const ShopProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const addCart = (producto, count) => {
        const productoABuscar = isInCart(producto);
        if (productoABuscar) {
            productoABuscar.count += count;
            const cartFiltrado = cart.filter(elemento => elemento.id !== producto.id);
            cartFiltrado.push(productoABuscar);
            setCart(cartFiltrado);
        } else {
            setCart([...cart, { ...producto, count }]);
        }
    }
    const removeItem = (id) => {
        const cartFiltrado = cart.filter(elemento => elemento.id !== id);
        setCart(cartFiltrado);
    }
    const clear = () => {
        setCart([]);
    }

    //Función auxiliar que me determina si el producto está en carrito
    const isInCart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id);
    }
    return (
        <Shop.Provider value={{ cart, addCart, removeItem, clear }} >
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider;