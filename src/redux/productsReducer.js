import produce from "immer";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload;
    case "ADD_PRODUCTS":
      return produce(state, (draft) => {
        draft.push(action.payload);
      });
    case "UPDATE_PRODUCT":
      return produce(state, (draft) => {
        let productToUpdate = draft.find(
          (item) => item.id == action.payload.id
        );
        productToUpdate.name = action.payload.name;
        productToUpdate.brand = action.payload.brand;
        productToUpdate.description = action.payload.description;
        productToUpdate.price = action.payload.price;
        productToUpdate.stock = action.payload.stock;
        productToUpdate.featured = action.payload.featured;
      });
    case "REMOVE_PRODUCT":
      return produce(state, (draft) => {
        let productToRemove = draft.find((item) => item.id === action.payload);
        let idxOfProductToRemove = draft.indexOf(productToRemove);
        draft.splice(idxOfProductToRemove, 1);
      });
    default:
      return state;
  }
};

export default productsReducer;
