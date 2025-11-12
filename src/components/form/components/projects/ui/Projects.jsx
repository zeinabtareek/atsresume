import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import {addProject} from "../utils/addProject";
import Project from "../components/Project";
import {MdAddCircle} from "react-icons/md";

const Projects = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Projects</h2>
      {resumeData.projects.map((project, index) => (
        <Project
          key={index}
          project={project}
          index={index}
        />
      ))}
      <button type="button"
              onClick={() => {
                addProject(resumeData, setResumeData)
              }}
              aria-label="Add"
              className="p-2 w-[37px] text-white bg-fuchsia-700 rounded text-xl">
        <MdAddCircle/>
      </button>
    </div>
  );
};

export default Projects;
// import React, { useContext } from "react";
// import { ResumeContext } from "../../../../builder";
// import { addProject } from "../utils/addProject";
// import Project from "../components/Project";
// import { MdAddCircle } from "react-icons/md";

// const Projects = () => {
//   const { resumeData, setResumeData } = useContext(ResumeContext);

//   // ✅ Handle missing or undefined resumeData/projects safely
//   const projects = resumeData?.projects ?? [];

//   return (
//     <div className="flex-col-gap-2">
//       <h2 className="input-title">Projects</h2>

//       {projects.length > 0 ? (
//         projects.map((project, index) => (
//           <Project key={index} project={project} index={index} />
//         ))
//       ) : (
//         <p className="text-gray-400 text-sm">No projects added yet.</p>
//       )}

//       <button
//         type="button"
//         onClick={() => addProject(resumeData, setResumeData)}
//         aria-label="Add"
//         className="p-2 w-[37px] text-white bg-fuchsia-700 rounded text-xl"
//       >
//         <MdAddCircle />
//       </button>
//     </div>
//   );
// };

// export default Projects;
