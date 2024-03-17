import React, { useState } from "react";
import PersonalForm from "./PersonalForm";
const Cv = (props) => {
  return (
    <>
      {props.personalInfo.name !== "" && (
        <p>Your name is {props.personalInfo.name}.</p>
      )}
    </>
  );
};

export default Cv;
