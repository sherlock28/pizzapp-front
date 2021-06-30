import { API_URL } from "../settings";

export function registerOrder({ order }) {
  return fetch(`${API_URL}/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then(response => response.json())
    .then(res => res)
    .catch(err => {
      console.err(err);
      return [];
    });
}
