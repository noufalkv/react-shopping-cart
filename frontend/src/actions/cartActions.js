 
import Axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${productId}`);
    // const {
    //   cart: { cartItems },
    // } = getState();
    // if (cartItems.length > 0 && data.seller._id !== cartItems[0].seller._id) {
    //   dispatch({
    //     type: CART_ADD_ITEM_FAIL,
    //     payload: `Can't Add To Cart. Buy only from ${cartItems[0].seller.seller.name} in this order`,
    //   });
    // } else {
      dispatch({
        type: CART_ADD_ITEM,
        payload: {
          name: data.name,
          image: data.image,
          price: data.price,
          countInStock: data.countInStock,
          product: data._id,
          seller: data.seller,
          qty,
        },
      });
      localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
      );
   // }
  };