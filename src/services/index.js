import { getAllProducts } from './products/getAllProducts';
import { getAllProductsById } from './products/getProductById';

import { signUpService } from "./auth/signUpService";
// import {  } from "./auth/signInService";
// import {  } from "./auth/signOutService";

export const {
    products: {
        getAllProducts,
        getAllProductsById
    },
    auth: {
        signUpService
    }
}