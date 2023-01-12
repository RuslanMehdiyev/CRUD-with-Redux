import { useDispatch, useSelector } from "react-redux";
import { deleteAll, deleteFromFav } from "../redux/actions/favoritesActions";

function Favorites() {
  const favoritesData = useSelector((state) => state.favoritesReducer);

  const dispatch = useDispatch();

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Favorites List</h2>
      {favoritesData.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Contact Title</th>
              <th>Contact Name</th>
              <th>Company Name</th>
              <th>
                <button onClick={() => dispatch(deleteAll())}>
                  Delete All
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {favoritesData &&
              favoritesData.map((e, key) => (
                <tr key={key}>
                  <td>{e.id}</td>
                  <td>{e.contactTitle}</td>
                  <td>{e.contactName}</td>
                  <td>{e.companyName}</td>
                  <td>
                    <button onClick={() => dispatch(deleteFromFav(e))}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <h3 style={{ textAlign: "center",marginTop:"1rem" }}>List is Empty</h3>
      )}
    </>
  );
}

export default Favorites;
