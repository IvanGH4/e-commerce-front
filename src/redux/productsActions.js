export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCTS",
    payload: product,
  };
};

export const updateProduct = (product) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: product,
  };
};

export const removeProduct = (id) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: id,
  };
};
