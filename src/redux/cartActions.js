export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};

export const increaseQty = (id) => {
  return {
    type: "INCREASE_QTY",
    payload: id,
  };
};

export const decreaseQty = (id) => {
  return {
    type: "DECREASE_QTY",
    payload: id,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
