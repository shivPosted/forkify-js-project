import { TIME_OUT_SEC } from './config.js';

const timeOut = function (s) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(`Request Timout after ${s} seconds`);
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeOut(TIME_OUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.statusText})`);
    return data;
  } catch (err) {
    throw err;
  }
};
