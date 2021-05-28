export const setAdmins = (admins) => {
  return {
    type: "SET_ADMINS",
    payload: admins,
  };
};

export const addAdmin = (admin) => {
  return {
    type: "ADD_ADMIN",
    payload: admin,
  };
};

export const deleteAdmin = (id) => {
  return {
    type: "DELETE_ADMIN",
    payload: id,
  };
};

export const updateAdmin = (info) => {
  return {
    type: "UPDATE_ADMIN",
    payload: info,
  };
};
