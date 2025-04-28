import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import Cart from "./Cart"; // Import the Cart component

const products = [
  { id: 1, name: "Veggies & Sweet Potato", price: 50, img: "https://goofytails.com/cdn/shop/files/VEGG_front.png?v=1737461036&width=1080" },
  { id: 2, name: "Bone Broth", price: 15, img: "https://goofytails.com/cdn/shop/files/Untitled_design_59.png?v=1737616633&width=720" },
  { id: 3, name: "Chicken & Herbs", price: 20, img: "https://goofytails.com/cdn/shop/files/chickenherbsmockup_932c51f0-6a49-403e-9795-91e761ecf571.png?v=1732083166&width=720" },
  { id: 4, name: "Chicken Super Food", price: 25, img: "https://goofytails.com/cdn/shop/files/1_666576d7-b489-493f-89a6-7eb2d594bf40.jpg?v=1683382868&width=720" },
  { id: 5, name: "Lamb & Pumpkin", price: 30, img: "https://goofytails.com/cdn/shop/files/Lamb_Pumpkin-200g.png?v=1737460641&width=720" },
  { id: 6, name: "Chicken & Quinoa", price: 35, img: "https://goofytails.com/cdn/shop/files/front_1.png?v=1737460890&width=720" },
];

const Product = () => {
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[product.id]) {
        newCart[product.id].quantity += 1; // Increase quantity if already in cart
      } else {
        newCart[product.id] = { ...product, quantity: 1 }; // Add new product to cart
      }
      return newCart;
    });
  };

  return (
    <div>
      <img src="https://furrry.co.uk/wp-content/themes/yootheme/cache/89/furrry-wagg-banner-nb-89010fbb.jpeg" alt="" height={240} width={1505} />
      <div className={styles.productContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <button className={styles.addBtn} onClick={() => addToCart(product)}>Add</button>
            <img src={product.img} alt={product.name} className={styles.productImage} />
            <h3>{product.name}</h3>
            <span className={styles.price}>${product.price}</span>
          </div>
        ))}
      </div>

      {Object.keys(cart).length > 0 && (
        <div className={styles.viewCart}>
          <Link to="/cart" className={styles.cartLink}>View Cart</Link>
        </div>
      )}

      {/* Render the Cart component and pass cart and setCart as props */}
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default Product;