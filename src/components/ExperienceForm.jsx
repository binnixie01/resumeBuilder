import { useState } from "react";

const ExperienceForm = (props) => {
  return (
    <>
      <form className="form rounded-lg flex flex-col gap-4">
        <div >
          <label>
            Company Name : 
            <input
              type="text"
              id="company"
              name="company"
              value={props.company}
              onChange={props.onEdit}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Position Title :
            <input
              type="text"
              id="position"
              name="position"
              value={props.position}
              onChange={props.onEdit}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Start Date :
            <input
              type="date"
              name="startDate"
              id="startDateCompany"
              value={props.startDate}
              onChange={props.onEdit}
            />
          </label>
        </div>
        <div>
          <label>
            End Date :
            <input
              type="date"
              name="endDate"
              id="endDateCompany"
              value={props.endDate}
              onChange={props.onEdit}
            />
          </label>
        </div>
        <div>
          <label>
            Description :
            <textarea
              type="text"
              id="description"
              name="description"
              rows="4" cols="20"
              value={props.description}
              onChange={props.onEdit}
              required
            />
          </label>
        </div>
      </form>
    </>
  );
};

export default ExperienceForm;
