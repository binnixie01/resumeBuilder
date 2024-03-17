import { useState } from "react";

const PersonalForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sbmitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name :
          <input
            type="text"
            value={props.name}
            id="name"
            name="name"
            onChange={props.onEdit}
            required
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          id="email"
          name="email"
          value={props.email}
          onChange={props.onEdit}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone No : </label>
        <input
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          value={props.number}
          onChange={props.onEdit}
          required
        />
      </div>
    </form>
  );
};

export default PersonalForm;
