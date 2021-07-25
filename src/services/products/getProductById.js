import { API_URL } from "../settings";

export function getProductById({ idProduct }) {
  return fetch(`${API_URL}/product/${idProduct}`)
    .then(response => response.json())
    .then(res => res)
    .catch(err => {
      console.error(err);
      return [];
    });
}
