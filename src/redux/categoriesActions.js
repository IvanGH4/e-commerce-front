export const setCategories = (categories) => {
  return {
    type: "SET_CATEGORIES",
    payload: categories,
  };
};

export const deleteCategory = (id) => {
  return {
    type: "DELETE_CATEGORY",
    payload: id,
  };
};
