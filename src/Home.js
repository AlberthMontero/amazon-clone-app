import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/YTNkYTJjMWMt/YTNkYTJjMWMt-YzFmOWNmYTQt-w1500._CB430284056_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12345"
          title="Echo Dot (3rd Gen) - Smart speaker with Alexa"
          price={49.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/91iWMrqJUfL._AC_SL1500_.jpg"
        />
        <Product
          id="12345"
          title="Echo Dot (3rd Gen) - Smart speaker with Alexa"
          price={49.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/91B+xrXdD+L._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12345"
          title="Echo Dot (3rd Gen) - Smart speaker with Alexa"
          price={24.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61aPU9DBjJL._AC_SL1000_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12345"
          title="Echo Dot (3rd Gen) - Smart speaker with Alexa"
          price={24.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41hX%2B2Es%2BvL._AC_.jpg"
        />
        <Product
          id="12345"
          title="Echo Dot (3rd Gen) - Smart speaker with Alexa"
          price={24.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61V25P7mlyL._AC_SL1000_.jpg"
        />
        <Product
          id="12345"
          title="Echo Dot (3rd Gen) - Smart speaker with Alexa"
          price={24.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61ne94gj9pL._AC_SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
