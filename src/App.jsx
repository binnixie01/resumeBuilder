import { React, useState } from "react";
import PersonalForm from "./components/PersonalForm";
import Cv from "./components/Cv";
import QualificationForm from "./components/QualificationForm";
import ExperienceForm from "./components/ExperienceForm";

const App = () => {
  const [personalInfo, setpPersonalInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [qualification, setQualification] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handlePersonalInfo = (e) => {
    const newPersonal = { ...personalInfo };
    newPersonal[e.target.name] = e.target.value;
    setpPersonalInfo(newPersonal);
  };

  const handleQualification = (e) => {
    const newQualification = { ...qualification };
    newQualification[e.target.name] = e.target.value;
    setQualification(newQualification);
  };
  const handleExperience = (e) => {
    const newExperience = { ...experience };
    newExperience[e.target.name] = e.target.value;
    setExperience(newExperience);
  };
  return (
    <>
      <PersonalForm
        name={personalInfo.name}
        email={personalInfo.email}
        number={personalInfo.number}
        onEdit={handlePersonalInfo}
      />
      <QualificationForm
        school={qualification.school}
        degree={qualification.degree}
        startDate={qualification.startDate}
        endDate={qualification.endDate}
        onEdit={handleQualification}
      />
      <ExperienceForm
        company={experience.company}
        position={experience.position}
        startDate={experience.startDate}
        endDate={experience.endDate}
        description={experience.description}
        onEdit={handleExperience}
      />

      <Cv personalInfo={personalInfo} />
    </>
  );
};

export default App;