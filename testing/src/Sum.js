export const add = (a, b) => {
  return a + b;
};

//Integration testing
export const total = (shipping, total) => {
  return "$" + add(shipping, total);
};
