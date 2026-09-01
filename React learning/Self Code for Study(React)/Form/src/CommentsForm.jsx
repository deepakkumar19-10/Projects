import { useState } from "react";
import "./CommentsForm.css";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <div className="comments-form">
      <form onSubmit={handleSubmit}>
        <h3>Give a comment</h3>
        <label htmlFor="username">Username</label>
        <input
          placeholder="username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />
        <br /> <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          value={formData.remarks}
          placeholder="Add Few Remarks"
          onChange={handleInputChange}
          id="remarks"
          name="remarks"
        ></textarea>
        <br /> <br />
        <label htmlFor="rating">Rating</label>
        <input
          placeholder="rating"
          type="number"
          min={1}
          max={20}
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />
        <br /> <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
