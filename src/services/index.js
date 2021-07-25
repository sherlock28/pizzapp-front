import { getAllProducts } from "./products/getAllProducts";
import { getProductById } from "./products/getProductById";

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
  getProductById,
};

export const orders = {
  registerOrder,
};
