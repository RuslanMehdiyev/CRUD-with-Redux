export const add = (payload) => {
  return {
    type: "ADD_FAV",
    payload,
  };
};
export const deleteAll = (payload) => {
  return {
    type: "DELETE_ALL",
    payload,
  };
};

export const deleteFromFav = (payload) => {
  return {
    type: "DELETE_FROM_FAV",
    payload,
  };
};
