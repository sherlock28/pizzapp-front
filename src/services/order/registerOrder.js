import { API_RESOURCES } from "../settings";

export function registerOrder({ order, jwt }) {
  return fetch(`${API_RESOURCES.orders}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwt,
    },
    body: JSON.stringify(order),
  })
    .then((response) => response.json())
    .then((res) => res)
    .catch((err) => {
      console.err(err);
      return [];
    });
}
