import React, {createContext, useContext, useState} from 'react';

// Create a context for cart jo main har component mein use kr sakta hun
const CartContext = createContext();

// ye function context ko use krne k liye hai . Or ye custom hook hai
export const useCart = () => useContext(CartContext);

// CartProvider component bnyein jo cart ki state ko sb children components tak provide kre ga
export const CartProvider =({ children }) => {
// cart ki state items ka array bnayein use state hook se
    const [cartItems, setCartItems] = useState([]);

// Product ko cart mein add krne k liye function bnyein   
   const addToCart = (product) => {

    // check krein k product already cart mein hai ya nahi
    const exist = cartItems.find(item => item.id === product.id);

    if (exist) {
        // Agr selected product already cart main hai to uski quantity increase +1 krein
        setCartItems(cartItems.map(item => 
            item.id === product.id ? {...item, quantity: item.quantity + 1} : item
        ));
    } else {
        // agr nahi hai to product ko cart mein add krdein
        setCartItems([...cartItems, {...product, quantity: 1}]);

    }
   } ;
   // Total quantity calculate karo
const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);


  // ✅ Increase quantity
  const increaseQty = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  // ✅ Decrease quantity (not below 1)
  const decreaseQty = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };


//    remove from cart 
const removeFromCart = (productId) => {
    // filter krke wo items hata do jo productId se match krti hein
    setCartItems(cartItems.filter(item => item.id !== productId));
}

// cart se product ko remove krne k liye function bnyein   

// context provider return kr rahy hein jis mein cart ka data or functions provide ho rahy hein
return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartCount, increaseQty, decreaseQty }}>
        { children }
    </CartContext.Provider>
)

}
