import produce from "immer";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return produce(state, (draft) => {
        draft.unshift(action.payload);
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
    default:
      return state;
  }
};

export default cartReducer;
