import { useSelector } from "react-redux";

function Favorites() {
  const favoritesData = useSelector((state) => state.favoritesReducer);

  console.log(favoritesData);
  return <>
  {
    favoritesData?{favoritesData}:"salam"
  }

  </>;
}

export default Favorites;
