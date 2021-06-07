import { getAllProducts } from "./products/getAllProducts";
import { getAllProductsById } from "./products/getProductById";

import { signUpService } from "./auth/signUpService";
import { signInService } from "./auth/signInService";
import { signOutService } from "./auth/signOutService";

export const auth = {
  signUpService,
  signInService,
  signOutService,
};

export const products = {
  getAllProducts,
  getAllProductsById,
};
