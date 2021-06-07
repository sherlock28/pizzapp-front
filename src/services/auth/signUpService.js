import { API_URL } from "../settings";

export function signUpService({ body }) {
  return fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(response => response)
    .then(res => res.json())
    .catch(err => err);
}
