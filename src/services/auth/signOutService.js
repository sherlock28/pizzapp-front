import { API_URL } from "../settings";

export function signOutService({ jwt }) {
  return fetch(`${API_URL}/signout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwt,
    },
    body: JSON.stringify({ jwt }),
  })
    .then(response => response)
    .catch(err => err);
}
