export const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  export const updateCartItemQuantity = (cartItems, itemId, quantity) => {
    return cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity,
        };
      }
      return item;
    });
  };
  