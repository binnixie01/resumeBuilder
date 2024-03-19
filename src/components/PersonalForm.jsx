import { useState } from "react";
import '../index.css'
const PersonalForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sbmitted");
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg flex flex-col gap-4 form">
      <div >
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
          name="number"
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
