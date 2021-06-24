import { API_URL } from "../settings";

export function signInService({ email, password }) {
  return fetch(`${API_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then(response => response)
    .catch(err => err);
}
