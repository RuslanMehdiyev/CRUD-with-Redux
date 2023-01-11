import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import {  postInfo } from "../redux/actions/actions";

function AddCustomers() {
  const dispatch = useDispatch();

  const [newInfo, setNewInfo] = useState({
    contactTitle: "",
    contactName: "",
    companyName: "",
  });

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setNewInfo({
      ...newInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postInfo(newInfo));
    toast.success("Info Added");
    e.target.reset();
  };

  return (
    <div className="addContainer">
      <ToastContainer />
      <h2>New Customer Info</h2>
      <form action="" className="addCustomer" onSubmit={handleSubmit}>
        <label htmlFor="contactTitle">Contact Title</label>
        <input
          type="text"
          name="contactTitle"
          id="contactTitle"
          required
          onChange={handleInput}
        />
        <label htmlFor="contactName">Contact Name</label>
        <input
          type="text"
          name="contactName"
          id="contactName"
          required
          onChange={handleInput}
        />
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          required
          onChange={handleInput}
        />
        <button>Add Customer</button>
      </form>
    </div>
  );
}

export default AddCustomers;
