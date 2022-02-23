export const filter_products = (selector) => {
  return {
    type: "FILTER_ITEMS",
    payload: selector,
  };
};
