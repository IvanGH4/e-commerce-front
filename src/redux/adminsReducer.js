import produce from "immer";

const adminsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ADMINS":
      return action.payload;
    case "ADD_ADMIN":
      return produce(state, (draft) => {
        draft.push(action.payload);
      });
    case "UPDATE_ADMIN":
      return produce(state, (draft) => {
        let adminToUpdate = draft.find((item) => item.id == action.payload.id);
        adminToUpdate.firstname = action.payload.firstname;
        adminToUpdate.lastname = action.payload.lastname;
      });
    case "DELETE_ADMIN":
      return produce(state, (draft) => {
        let adminToRemove = draft.find((item) => item.id === action.payload);
        let indexOfAdmin = draft.indexOf(adminToRemove);
        draft.splice(indexOfAdmin, 1);
      });
    default:
      return state;
  }
};

export default adminsReducer;
