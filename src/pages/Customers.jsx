import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../redux/actions/actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { add } from "../redux/actions/favoritesActions";

function Customers() {
  const crudData = useSelector((state) => state.customerReducer);
  const favorites = useSelector((state) => state.favoritesReducer);
  console.log(favorites);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);

  const handleDelete = (id) => {
    fetch(`https://northwind.vercel.app/api/customers/${id}`, {
      method: "DELETE",
    })
      .then(() => dispatch(getAll()))
      .then(() => toast.success("Info is Deleted"));
  };

  return (
    <>
      <div>
        <ToastContainer />
        <h2 style={{ textAlign: "center" }}>Customer List</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Contact Title</th>
              <th>Contact Name</th>
              <th>Company Name</th>
              <th>Delete</th>
              <th>Add to Fav</th>
            </tr>
          </thead>
          <tbody>
            {crudData &&
              crudData.map((e, key) => (
                <tr key={key}>
                  <td>{e.id}</td>
                  <td>{e.contactTitle}</td>
                  <td>{e.contactName}</td>
                  <td>{e.companyName}</td>
                  <td>
                    <button onClick={() => handleDelete(e.id)}>Delete</button>
                  </td>
                  <td>
                    <button onClick={() => dispatch(add(e))}>Add to Fav</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Customers;
