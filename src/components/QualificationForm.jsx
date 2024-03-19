import { useState } from "react";

const QualificationForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form rounded-lg flex flex-col gap-4">
        <div>
          <label>School : </label>
          <input
            type="text"
            id="school"
            name="school"
            value={props.school}
            onChange={props.onEdit}
          />
        </div>
        <div>
          <label>
            Degree :
            <input
              type="text"
              id="degree"
              name="degree"
              value={props.degree}
              onChange={props.onEdit}
            />{" "}
          </label>
        </div>
        <div>
          <label>
            Start Date :
            <input
              type="date"
              id="startDateDegree"
              name="startDate"
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
              id="endDateDegreee"
              value={props.endDate}
              onChange={props.onEdit}
            />
          </label>
        </div>
      </form>
    </>
  );
};

export default QualificationForm;
