import produce from "immer";

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return action.payload;
    case "DELETE_CATEGORY":
      return produce(state, (draft) => {
        let categoryToRemove = draft.find((item) => item.id === action.payload);
        let indexOfCategory = draft.indexOf(categoryToRemove);
        draft.splice(indexOfCategory, 1);
      });
    case "UPDATE_CATEGORY":
      console.log(action.payload);
      return produce(state, (draft) => {
        let categoryToUpdate = draft.find(
          (item) => item.id == action.payload.id
        );
        categoryToUpdate.name = action.payload.name;
      });
    case "ADD_CATEGORY":
      return produce(state, (draft) => {
        draft.push(action.payload);
      });

    default:
      return state;
  }
};

export default categoriesReducer;
