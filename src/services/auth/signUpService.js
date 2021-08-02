import { API_RESOURCES } from "../settings";

export function signUpService({ body }) {
  return fetch(`${API_RESOURCES.auth.signup}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(response => response)
    .catch(err => err);
}
