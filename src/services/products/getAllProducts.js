import { API_RESOURCES } from "../settings";

export function getAllProducts() {
  return fetch(`${API_RESOURCES.products}`)
    .then(response => response.json())
    .then(res => res)
    .catch(err => {
      console.error(err);
      return [];
    });
}
