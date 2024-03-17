import { useState } from "react";

const ExperienceForm = (props) => {
  return (
    <>
      <form>
        <div>
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
          <label htmlFor="position">
            Position Title :
            <input
              type="text"
              id="position"
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
            <input
              type="text"
              id="description"
              name="description"
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
