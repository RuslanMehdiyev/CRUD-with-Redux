import { Route, Routes } from "react-router-dom";
import "./assets/style/main.css";
import Header from "./components/Header";
import AddCustomers from "./pages/AddCustomers";
import Customers from "./pages/Customers";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Customers />} />
        <Route path="/addcustomer" element={<AddCustomers />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
