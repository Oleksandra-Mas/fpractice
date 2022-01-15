const BASE_URL = "http://localhost:4445/";
const END_POINTS = { query: "query" };
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
