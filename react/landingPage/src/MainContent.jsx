import React, { useState } from 'react';
import productImage from './assets/dumbblles.jpg'

const MainContent = () => {
  const [quantity, setQuantity] = useState(1);

  const productTitle = "AmazonBasics Neoprene Dumbbells";
  const productDescription = "Enhance your workout with high-quality dumbbells";

  return (
    <main>
      <section className="product-section">
        <img src={productImage} className="product-image" alt="Product" />
        <div className="product-details">
          <h2>{productTitle}</h2>
          <p>{productDescription}</p>
          <div className="quantity-section">
            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <br></br>
          <button onClick={() => alert(`Added ${quantity} ${productTitle}(s) to the cart!`)}>
            Add to Cart
          </button>
        </div>
      </section>
      <section className="features-section">
        <h2>Product Features</h2>
        <ul>
          <li>Set of two high-quality neoprene-coated dumbbells</li>
          <li>Weights available from 1 to 20 pounds</li>
          <li>Easy-grip neoprene coating for a secure hold</li>
          <li>Hexagonal shape prevents rolling and ensures stability</li>
          <li>Great for both beginners and advanced users</li>
        </ul>
      </section>
    </main>
  );
};

export default MainContent;
