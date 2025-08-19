import React, { useState } from "react";

const Form = ({ isForm, onAdd }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!name || !country || !date) {
      alert("Please fill in all fields");
    }

    const newDestination = {
      name,
      country,
      date,
      description,
      status: "Wishlist",
    };

    onAdd(newDestination);

    isForm();

    setName("");
    setCountry("");
    setDate("");
    setDescription("");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        className="input"
        placeholder="Destination name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={country}
        className="input"
        placeholder="Country"
        onChange={(e) => setCountry(e.target.value)}
      />
      <input
        type="date"
        value={date}
        className="input"
        onChange={(e) => setDate(e.target.value)}
      />
      <textarea
        className="textarea input"
        value={description}
        placeholder="Description optional"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <div className="btn-group">
        <button className="btn btn-gray" onClick={isForm}>
          Cancle
        </button>
        <button className="btn" onClick={handleSubmit}>
          Add Destination
        </button>
      </div>
    </div>
  );
};

export default Form;
