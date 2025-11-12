// /* eslint-disable react/jsx-no-undef */
// import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube,} from "react-icons/fa";
// import {CgWebsite} from "react-icons/cg";
// import React, {useContext, useState} from "react";
// import {ResumeContext} from "../../builder";
// import dynamic from "next/dynamic";
// import ModalHighlightMenu from "../components/ModalHighlightMenu";
// import Header from "../components/Header";
// import LeftSide from "../components/LeftSide";
// import RightSide from "../components/RightSide";
// import A4PageWrapper from "../components/A4PageWrapper";
// import {onDragEndHandler} from "../utils/onDrugEndHandler";

// const DragDropContext = dynamic(
//   () =>
//     import("react-beautiful-dnd").then((mod) => {
//       return mod.DragDropContext;
//     }),
//   {ssr: false}
// );

// const Preview = () => {
//   const {resumeData, setResumeData} = useContext(ResumeContext);
//   const icons = [
//     {name: "github", icon: <FaGithub/>},
//     {name: "linkedin", icon: <FaLinkedin/>},
//     {name: "twitter", icon: <FaTwitter/>},
//     {name: "facebook", icon: <FaFacebook/>},
//     {name: "instagram", icon: <FaInstagram/>},
//     {name: "youtube", icon: <FaYoutube/>},
//     {name: "website", icon: <CgWebsite/>},
//   ];

//   return (
//     <div className="md:max-w-[60%] sticky top-0 preview rm-padding-print p-6 md:overflow-y-scroll md:h-screen">
//       <A4PageWrapper>
//         <ModalHighlightMenu/>
//         <DragDropContext onDragEnd={onDragEndHandler}>
//           <Header resumeData={resumeData} icons={icons}/>
//           <hr className="border-dashed my-2"/>
//           <div className="grid grid-cols-3 gap-6">
//             <LeftSide resumeData={resumeData}/>
//             <RightSide resumeData={resumeData}/>
//           </div>
//         </DragDropContext>
//       </A4PageWrapper>
//     </div>
//   );
// };

// export default Preview;
/* eslint-disable react/jsx-no-undef */
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import React, { useContext } from "react";
import { ResumeContext } from "../../builder";
import dynamic from "next/dynamic";
import ModalHighlightMenu from "../components/ModalHighlightMenu";
import Header from "../components/Header";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import A4PageWrapper from "../components/A4PageWrapper";
import { onDragEndHandler } from "../utils/onDrugEndHandler";

const DragDropContext = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => mod.DragDropContext),
  { ssr: false }
);

const Preview = () => {
  const { resumeData } = useContext(ResumeContext);

  const icons = [
    { name: "github", icon: <FaGithub /> },
    { name: "linkedin", icon: <FaLinkedin /> },
    { name: "twitter", icon: <FaTwitter /> },
    { name: "facebook", icon: <FaFacebook /> },
    { name: "instagram", icon: <FaInstagram /> },
    { name: "youtube", icon: <FaYoutube /> },
    { name: "website", icon: <CgWebsite /> },
    { name: "dribbble", icon: <FaDribbble /> },
    { name: "behance", icon: <FaBehance /> },
  ];

  return (
    <div className="md:max-w-[60%] sticky top-0 preview rm-padding-print p-6 md:overflow-y-scroll md:h-screen bg-gray-50 rounded-lg shadow-lg">
      <A4PageWrapper>
        <ModalHighlightMenu />
        <DragDropContext onDragEnd={onDragEndHandler}>
          {/* Header Section */}
          <Header resumeData={resumeData} icons={icons} />

          <hr className="border-dashed my-4 border-gray-300" />

          {/* Social Icons Row */}
          <div className="flex flex-wrap gap-3 mb-4">
            {icons.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer"
                title={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              >
                {item.icon}
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LeftSide resumeData={resumeData} />
            <RightSide resumeData={resumeData} />
          </div>
        </DragDropContext>
      </A4PageWrapper>
    </div>
  );
};

export default Preview;
