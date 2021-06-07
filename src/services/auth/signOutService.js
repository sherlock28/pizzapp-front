import { API_URL } from "../settings";

export function signOutService({ jwt }) {
  return fetch(`${API_URL}/signin`, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ jwt }),
  })
    .then(response => response)
    .then(res => res.json())
    .catch(err => err);
}
