import { API_URL } from "../settings";

export function getAllProductsById({ idProduct }) {
  return fetch(`${API_URL}/product/${idProduct}`)
    .then(response => response)
    .catch(err => err);
}
