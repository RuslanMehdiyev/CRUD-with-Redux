export const getAll = () => {
  return async (dispatch) => {
    fetch("https://northwind.vercel.app/api/customers")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "GET_ALL", payload: data });
      });
  };
};

export const postInfo = (payload) => {
  return async (dispatch) => {
    fetch("https://northwind.vercel.app/api/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then(() => dispatch(getAll()));
  };
};
