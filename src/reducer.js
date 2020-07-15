export const initialState = {
  basket: [
    {
      id: 12351,
      title: 'Echo Dot (3rd Gen) - Smart speaker with Alexa',
      price: 24.99,
      rating: 5,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/41hX%2B2Es%2BvL._AC_.jpg'
    }
  ],
  user: null
};

export const getBasketTotal = basket =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action); //Debbug

  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: [...state.basket.filter(item => item.id !== action.id)]
      };
    default:
      return state;
  }
}

export default reducer;
