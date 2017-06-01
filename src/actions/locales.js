import axios from "axios";

export const GET_LOCALES = "GET_LOCALES";

const GET_LOCALES_URL = "/locales";

export function getLocales(propertyInput) {
  const request = axios.post(GET_LOCALES_URL, propertyInput);

  return {
    type: GET_LOCALES,
    payload: request
  };
};