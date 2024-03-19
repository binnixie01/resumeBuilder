import React, { useState } from "react";
import PersonalForm from "./PersonalForm";
const Cv = (props) => {
  return (
    <div className="ml-12 mt-14 flex gap-10 flex-col mr-12">
      <div id="personal">
        {props.personalInfo.name !== "" && <h1 className="text-2xl tracking-wider font-normal flex flex-auto"> {props.personalInfo.name.toUpperCase()}</h1>}
        <div className="flex gap-4">
          {props.personalInfo.email !== "" && <div className="text-xs">{props.personalInfo.email}</div>}
          {props.personalInfo.number !== "" && <div className="text-xs">{props.personalInfo.number}</div>}
        </div>
      </div>
      <div id='qualification' className="flex items-start gap-10">
        <h1 className="text-sm font-medium">Qualification</h1>
        <div className="flex flex-col details">
          {props.qualification.school !== "" && <div>{props.qualification.school}</div>}
          {props.qualification.degree !== "" && <div className="text-xs">{props.qualification.degree}</div>}
          {props.qualification.grade !== "" && <div className="text-xs">{props.qualification.grade}</div>}
          {props.qualification.startDate !== "" && <span className="text-xs mr-4">{props.qualification.startDate}</span>}
          {props.qualification.endDate !== "" && <span className="text-xs">{props.qualification.endDate}</span>}</div>
      </div>
      <div id="experience" className="flex gap-10 items-start">
        <h1 className="text-sm font-normal">Experience</h1>
        <div className="flex flex-col details">
          {props.experience.position !== "" && <div className="text-base font-bold">{props.experience.position}</div>}
          {props.experience.company !== "" && <div className="text-xs font-semibold">{props.experience.company}</div>}
          {props.experience.startDate !== "" && <span className="mr-4 text-xs">{props.experience.startDate}</span>}
          {props.experience.endDate !== "" && <span className="text-xs">{props.experience.endDate}</span>}
          {props.experience.description !== "" && <div id="describe">{props.experience.description}</div>}</div>
      </div>
    </div>
  );
};

export default Cv;
