const DEFAULT_KEY = "CADSYS";

const get = (key, fallback = []) => {
  const value = window.localStorage.getItem(`${DEFAULT_KEY}${key}`);
  return JSON.parse(value) || fallback;
};

const set = (key, value) => {
  window.localStorage.setItem(`${DEFAULT_KEY}${key}`, JSON.stringify(value));
};
