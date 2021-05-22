import produce from "immer";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return produce(state, (draft) => {
        let productExistsOnCart = draft.find(
          (item) => item.product.id === action.payload.product.id
        );
        if (productExistsOnCart) {
          productExistsOnCart.productQuantity =
            productExistsOnCart.productQuantity + 1;
        } else {
          draft.unshift(action.payload);
        }
      });
    case "REMOVE_ITEM":
      return produce(state, (draft) => {
        let itemToRemove = draft.find(
          (item) => item.product.id === action.payload
        );
        let idxOfItemToRemove = draft.indexOf(itemToRemove);
        console.log(idxOfItemToRemove);
        draft.splice(idxOfItemToRemove, 1);
      });
    case "INCREASE_QTY":
      return produce(state, (draft) => {
        let itemToIncrease = draft.find(
          (item) => item.product.id === action.payload
        );
        itemToIncrease.productQuantity = itemToIncrease.productQuantity + 1;
        itemToIncrease.totalPrice =
          itemToIncrease.productQuantity * itemToIncrease.product.price;
      });
    case "DECREASE_QTY":
      return produce(state, (draft) => {
        let itemToDecrease = draft.find(
          (item) => item.product.id === action.payload
        );
        itemToDecrease.productQuantity = itemToDecrease.productQuantity - 1;
        itemToDecrease.totalPrice =
          itemToDecrease.productQuantity * itemToDecrease.product.price;
        if (itemToDecrease.productQuantity === 0) {
          let idxOfItem = draft.indexOf(itemToDecrease);
          draft.splice(idxOfItem, 1);
        }
      });
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export default cartReducer;
