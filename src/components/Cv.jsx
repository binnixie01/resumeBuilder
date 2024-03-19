import React, { useState } from "react";
import PersonalForm from "./PersonalForm";
const Cv = (props) => {
  return (
    <>
      <div id="personal">
        {props.personalInfo.name !== "" && <h1> {props.personalInfo.name}</h1>}
        {props.personalInfo.email !== "" && <div>{props.personalInfo.email}</div>}
        {props.personalInfo.number !== "" && <div>{props.personalInfo.number}</div>}
      </div>
      <div id='qualification'>
      {props.qualification.school !== "" && <div>{props.qualification.school}</div>}
        {props.qualification.degree !== "" && <div>{props.qualification.degree}</div>}
        {props.qualification.startDate !== "" && <div>{props.qualification.startDate}</div>}
        {props.qualification.endDate !== "" && <div>{props.qualification.endDate}</div>}
      </div>
    </>
  );
};

export default Cv;
