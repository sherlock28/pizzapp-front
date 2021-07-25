import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "reducers/userSlice";
import { addProductToCart, cartSelector } from "reducers/cartSlice";
import { productSelector } from "reducers/productSlice";
import { useDisclosure } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

export function useAddProductToCart() {
  const toast = useToast();
  const dispatch = useDispatch();
  const { cart } = useSelector(cartSelector);
  const { products } = useSelector(productSelector);
  const { isLoggedIn } = useSelector(userSelector);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addToCart = id => {
    if (!isLoggedIn) onOpen();
    else {
      const productToAdd = cart.filter(product => product._id === id);

      if (productToAdd.length === 0) {
        const product = products.filter(product => product._id === id);
        const newProduct = {
          count: 1,
          ...product[0],
          subtotal: product[0].price * 1,
        };
        const newProducts = [...cart, newProduct];
        dispatch(addProductToCart(newProducts));
      } else {
        const restProduct = cart.filter(product => product._id !== id);
        const product = products.filter(product => product._id === id);
        const newCount = productToAdd[0].count + 1;
        const productUpdated = {
          count: newCount,
          ...product[0],
          subtotal: product[0].price * newCount,
        };
        const newProducts = [...restProduct, productUpdated];
        dispatch(addProductToCart(newProducts));
      }
    }
    if (isLoggedIn)
      toast({
        title: "Success.",
        description: "Producto agregado.",
        status: "success",
        duration: 1200,
        isClosable: true,
      });
  };

  return { addToCart, isOpen, onClose };
}
