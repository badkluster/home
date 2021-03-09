import { basePath, apiVersion } from "./config";

export function suscribeNewsletterApi(email) {
  const url = `${basePath}/${apiVersion}/suscribe-newsletter/${email.toLowerCase()}`;
  const params = {
    method: "POST",
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function getNewsletterApi() {
  const url = `${basePath}/${apiVersion}/get-newsletter`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}
