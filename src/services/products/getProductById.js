import { API_RESOURCES } from "../settings";

export function getProductById({ idProduct }) {
  return fetch(`${API_RESOURCES.products}/${idProduct}`)
    .then(response => response.json())
    .then(res => res)
    .catch(err => {
      console.error(err);
      return [];
    });
}
