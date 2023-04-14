import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.covid19api.com",
});

export const getSummary = async (signal: AbortSignal | undefined) => {
  return (await API.get("summary", { signal })).data;
};

export const getByCountryAllStatus = async (
  signal: AbortSignal | undefined,
  country: string,
  dateFrom: string,
  dateTo: string
) => {
  const res = await API.get(
    "/total/country/" +
      country +
      "?from=" +
      new Date(dateFrom).toISOString() +
      "&to=" +
      new Date(dateTo).toISOString(),
    { signal }
  );

  // If data is too big (>100) save only nth infromation for better performance
  const len = res.data.length;
  let arr = [];

  if (len > 100) {
    var delta = Math.floor(len / 100);
    for (let i = 0; i < len; i = i + delta) {
      arr.push(res.data[i]);
    }
    return arr;
  } else return res.data;
};
