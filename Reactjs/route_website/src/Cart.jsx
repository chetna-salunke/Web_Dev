import React from "react";
import styles from "./Product.module.css";

const Cart = ({ cart, setCart }) => {
  const updateQuantity = (id, delta) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      const currentQuantity = newCart[id].quantity + delta;

      if (currentQuantity <= 0) {
        delete newCart[id]; // Remove item if quantity is 0
      } else {
        newCart[id].quantity = currentQuantity; // Update quantity
      }

      return newCart;
    });
  };

  const totalPrice = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.cartBar}>
      {Object.keys(cart).length === 0 ? (
        <p className={styles.emptyCart}>Heyyy....Your cart is empty!</p>
      ) : (
        <>
          {Object.values(cart).map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <span className={styles.cartName}>{item.name}</span>
              <button className={styles.cartBtn} onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span className={styles.cartQty}>{item.quantity}</span>
              <button className={styles.cartBtn} onClick={() => updateQuantity(item.id, 1)}>+</button>
              <span className={styles.cartPrice}>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</div>
        </>
      )}
    </div>
  );
};

export default Cart;