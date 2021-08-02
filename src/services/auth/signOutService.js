import { API_RESOURCES } from "../settings";

export function signOutService({ jwt }) {
  return fetch(`${API_RESOURCES.auth.signout}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwt,
    },
    body: JSON.stringify({ jwt }),
  })
    .then(response => response)
    .catch(err => err);
}
