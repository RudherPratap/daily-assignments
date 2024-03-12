import React, { useState } from 'react';
import productImage from './assets/dumbblles.jpg';
import Card from './components/card';

const MainContent = () => {
  const [quantity, setQuantity] = useState(1);

  const productTitle = "AmazonBasics Neoprene Dumbbells";
  const productDescription = "Enhance your workout with high-quality dumbbells";

  const items = [
    {
      title: 'Some training eqipments'
    },
    {title: "Elliptical Trainer", 
    description: "A stationary exercise machine that simulates walking, running, or climbing with low impact on joints."
    },
    {title: "Stationary Bike", 
    description: "A stationary exercise bike that provides a cardiovascular workout by pedaling against resistance."
    },
    {title: "Kettlebell", 
    description: "A cast-iron weight with a handle, used for ballistic exercises that combine cardiovascular, strength, and flexibility training."
    },
    {title: "Resistance Bands", 
    description: "Elastic bands of varying resistance used for strength training, stretching, and rehabilitation exercises."
    },
    {title: "Exercise Ball", 
    description: "A large inflatable ball used for stability and balance exercises, as well as core strength training."
    },
    {title: "Pull-up Bar", 
    description: "A horizontal bar mounted at a height for gripping and pulling oneself up, targeting the upper body muscles."
    },
    {title: "Jump Rope", 
    description: "A length of rope with handles at each end, used for cardiovascular exercise and improving coordination and agility."
    },
    {
      title: 'AmazonBasics Neoprene Dumbbells',
      description: 'Enhance your workout with high-quality dumbbells',
      
    },
    {
      title: 'AmazonBasics High-Density Round Foam Roller',
      description: 'Relieve muscle tension with a high-density foam roller',
      
    }
  ];

  return (
    <main>
      <section className='product'>
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
      </section>
      <section className='card-items'>
      <div style={{
    display:"flex",
    flexDirection:"column",
    gap:'10px'
  }}>
    {
      items.map(item => <Card item={item}/>)
    }
  </div>
      </section>
    </main>
  );
};

export default MainContent;
