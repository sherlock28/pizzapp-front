import { useDispatch, useSelector } from "react-redux";
import {
  removeProductFromCart,
  updateCountFromCart,
  cartSelector,
} from "reducers/cartSlice";

export function useCartOptions() {
  const dispatch = useDispatch();
  const { cart } = useSelector(cartSelector);

  const removeProduct = (id) => {
    dispatch(removeProductFromCart(id));
  };

  const updateCount = (id, count) => {
    count = parseInt(count)
    const index = cart.findIndex((product) => product._id === id);
    let product = cart.find((product) => product._id === id);

    let productUpdated = Object.assign({}, product, {
      count,
      subtotal: product.price * count,
    });

    let newCart = [...cart];
    newCart[index] = productUpdated;

    dispatch(updateCountFromCart(newCart));
  };

  return { updateCount, removeProduct };
}
