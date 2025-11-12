import React from 'react';
import LoadUnload from "../components/LoadUnload";
import PersonalInformation from "../components/PersonalInformation";
import SocialMedias from "../components/socialMedia/ui/SocialMedias";
import Summary from "../components/Summary";
import Educations from "../components/education/ui/Educations";
import WorkExperiences from "../components/workExperience/ui/WorkExperiences";
import Projects from "../components/projects/ui/Projects";
import Skills from "../components/skills/ui/Skills";
import Languages from "../components/languages/ui/Languages";
import TestsAndCertifications from "../components/testsAndCertifications/ui/TestsAndCertifications";

const Form = () => {
  return (
<form className="p-4 bg-gradient-to-b from-[#3D52A0] via-[#7091E6] to-[#EDE8F5] text-black exclude-print md:max-w-[40%] md:h-screen md:overflow-y-scroll">

      <LoadUnload/>
      <PersonalInformation/>
      <SocialMedias/>
      <Summary/>
      <Educations/>
      <WorkExperiences/>
      <Projects/>
      <Skills/>
      <Languages/>
      <TestsAndCertifications/>
    </form>
  );
};

export default Form;
