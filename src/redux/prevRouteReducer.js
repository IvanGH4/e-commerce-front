const prevRouteReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_ROUTE":
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default prevRouteReducer;
