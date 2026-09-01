import { useState } from "react";
import "./Form.css";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  //   let handleNameChange = (event) => {
  //     setFullName(event.target.value);
  //   };

  //   let handleUsername = (event) => {
  //     setUsername(event.target.value);
  //   };

  let handleInputChange = (event) => {
    // let fieldName = event.target.name;
    // let newValue = event.target.value;
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Fill the Form</h3>
        <label htmlFor="fullName">Full Name</label>
        <input
          placeholder="Enter your FullName"
          type="text"
          value={formData.fullName}
          //onChange={handleNameChange}
          id="fullName"
          name="fullName"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="username">Username</label>
        <input
          placeholder="Enter your Username"
          type="text"
          value={formData.username}
          //onChange={handleUsername}
          id="username"
          name="username"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          placeholder="Enter your Password"
          type="password"
          value={formData.password}
          //onChange={handlePassword}
          id="password"
          name="password"
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
