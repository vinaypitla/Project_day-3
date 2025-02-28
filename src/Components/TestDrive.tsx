import NavBar from "./NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import date picker styles

export default function AddStudent() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [model, setModel] = useState("Select the car to drive");
  const [date, setDate] = useState(null); // Default value should be `null` for DatePicker

  const saveStu = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Submit button clicked!!!!");
    console.log("Name --->", name);
    console.log("Phone --->", phone);
    console.log("Email --->", email);
    console.log("Selected Car Model --->", model);
    console.log("Selected Date --->", date);

    const Customer = { name, phone, email, model, date };
    console.log("Customer Data:", Customer);

    // Navigate to another page after submission
    navigate("/submitted");
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={saveStu} className="stu-add-mar">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone no</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            placeholder="Enter Phone Number"
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Email"
              
            required
          />
        </div>

        {/* Car Model Dropdown */}
        <div className="form-group mt-3">
          
        </div>

        {/* Date Picker */}
        <div className="form-group mt-3">
          
         
        </div>

        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
