import axios from "axios";

const BASE_URL = "http://localhost:4445/";
const END_POINTS = { query: "query" };
const PEXELS_KEY = "563492ad6f9170000100000183fce21b6677432c987d52e09c24dd1f";
const PEXELS_BASE = "https://api.pexels.com/v1/";
const PEXELS_ENDPOINTS = { search: "search" };

export const handlePost = (obj) => {
  let url = BASE_URL + END_POINTS.query;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  return fetch(url, options).then((response) => console.log(response));
};

export const getPexelsImages = async (query) => {
  axios.defaults.headers.common.Authorization = PEXELS_KEY;
  axios.defaults.baseURL = PEXELS_BASE;
  const res = await axios.get(
    PEXELS_ENDPOINTS.search + `?query=${query}&per_page=4`
  );
  return res.data;
};
