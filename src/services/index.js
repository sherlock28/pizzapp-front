import { getAllProducts } from './products/getAllProducts';
import { getAllProductsById } from './products/getProductById';

import { signUpService } from "./auth/signUpService";
import { signInService } from "./auth/signInService";
import { signOutService } from "./auth/signOutService";

export const {
    products: {
        getAllProducts,
        getAllProductsById
    },
    auth: {
        signUpService, signInService, signOutService
    }
}