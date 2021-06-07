import { API_URL } from "../settings";

export function signInService({ email, password }) {
  return fetch(`${API_URL}/signin`, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then(response => response)
    .then(res => res.json())
    .catch(err => err);
}
