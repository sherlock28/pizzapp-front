import { API_URL } from "../settings";

export function getAllProducts() {
  return fetch(`${API_URL}/product`)
    .then(response => response.json())
    .then(res => res)
    .catch(err => err);
}
