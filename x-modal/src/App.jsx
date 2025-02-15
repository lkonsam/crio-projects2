import { useState } from "react";
import "./App.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const dobDate = new Date(formData.dob);
    const today = new Date();

    if (dobDate > today) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    // alert("Form submitted successfully!");
    setShowModal(false);
    setFormData({ username: "", email: "", phone: "", dob: "" });
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={() => setShowModal(true)}>Open Form</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                minLength={10}
                maxLength={10}
                required
              />
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
