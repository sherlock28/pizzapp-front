import { getAllProducts } from "./products/getAllProducts";
import { getAllProductsById } from "./products/getProductById";

import { signUpService } from "./auth/signUpService";
import { signInService } from "./auth/signInService";
import { signOutService } from "./auth/signOutService";

import { registerOrder } from "./order/registerOrder";

export const auth = {
  signUpService,
  signInService,
  signOutService,
};

export const products = {
  getAllProducts,
  getAllProductsById,
};

export const orders = {
  registerOrder,
};
