import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider';

function CheckoutProduct({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // Remove from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, idx) => (
              <p key={idx}>
                <span role="img" aria-label="star">
                  &#11088;
                </span>
              </p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
