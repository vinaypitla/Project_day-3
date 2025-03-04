import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "./NavBar";
import "../Css/TestDrive.css"

export default function BookTestDrive() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [carModel, setCarModel] = useState("Select the car to drive");
  const [preferredDate, setPreferredDate] = useState<Date | null>(null);


  const availableCars = ["Tesla Model 3", "BMW X5", "Audi A4", "Mercedes C-Class"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (carModel === "Select the car to drive") {
      alert("Please select a car model.");
      return;
    }

    const bookingData = {
      fullName,
      phone,
      email,
      carModel,
      preferredDate,
    };

    try {
      const response = await axios.post("http://localhost:8080/testdrive/book", bookingData);
      console.log("Booking successful:", response.data);
      alert("Test drive booked successfully!");
      navigate("/submitted"); // Redirect after submission
    } catch (error) {
      console.error("Error booking test drive:", error);
      alert("Failed to book test drive. Please try again.");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <h2>Book a Test Drive</h2>
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="form-control"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder="Enter phone number"
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
              placeholder="Enter email"
              required
            />
          </div>

          {/* Car Model Dropdown */}
          <div className="form-group">
            <label></label>
            <Dropdown>
              <Dropdown.Toggle variant="secondary">
                {carModel}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {availableCars.map((car, index) => (
                  <Dropdown.Item key={index} onClick={() => setCarModel(car)}>
                    {car}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Date Picker */}
          <div className="form-group mt-3">
            <label></label>
            <DatePicker
              selected={preferredDate}
              onChange={(date) => setPreferredDate(date)}
              className="form-control"
              minDate={new Date()} // Prevent past dates
              placeholderText="Select a date"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Book Test Drive
          </button>
        </form>
      </div>
    </div>
  );
}
