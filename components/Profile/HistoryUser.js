import { useState } from "react";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Post from "./Post";
import Skills from "./Skills";

const HistoryUser = () => {
  const [componentState, setComponentState] = useState("experience");
  const contentHandler = (item) => {
    setComponentState(item);
  };
  console.log(componentState);
  return (
    <div className="w-full h-max rounded bg-white mb-8">
      <div className="px-4 pt4">
        <div>
          <ul className="flex justify-between items-center text-2xl text-slate-400 my-4">
            <li
              onClick={contentHandler.bind(null, "experience")}
              className={`border-b-2 w-full border-slate-900 text-center ${
                componentState === "experience"
                  ? "border-emerald-600 text-slate-900"
                  : ""
              }`}
            >
              <button className="mb-2">
                {componentState === "experience" ? (
                  <ion-icon name="briefcase"></ion-icon>
                ) : (
                  <ion-icon name="briefcase-outline"></ion-icon>
                )}
              </button>
            </li>
            <li
              onClick={contentHandler.bind(null, "education")}
              className={`border-b-2 w-full border-slate-900 text-center ${
                componentState === "education"
                  ? "border-emerald-600 text-slate-900"
                  : ""
              }`}
            >
              <button className="mb-2">
                {componentState === "education" ? (
                  <ion-icon name="school"></ion-icon>
                ) : (
                  <ion-icon name="school-outline"></ion-icon>
                )}
              </button>
            </li>
            <li
              onClick={contentHandler.bind(null, "skill")}
              className={`border-b-2 w-full border-slate-900 text-center ${
                componentState === "skill"
                  ? "border-emerald-600 text-slate-900"
                  : ""
              }`}
            >
              <button className="mb-2">
                {componentState === "skill" ? (
                  <ion-icon name="cog"></ion-icon>
                ) : (
                  <ion-icon name="cog-outline"></ion-icon>
                )}
              </button>
            </li>
            <li
              onClick={contentHandler.bind(null, "postList")}
              className={`border-b-2 w-full border-slate-900 text-center ${
                componentState === "postList"
                  ? "border-emerald-600 text-slate-900"
                  : ""
              }`}
            >
              <button className="mb-2">
                {componentState === "postList" ? (
                  <ion-icon name="newspaper"></ion-icon>
                ) : (
                  <ion-icon name="newspaper-outline"></ion-icon>
                )}
              </button>
            </li>
            <li
              onClick={contentHandler.bind(null, "contact")}
              className={`border-b-2 w-full border-slate-900 text-center ${
                componentState === "contact"
                  ? "border-emerald-600 text-slate-900"
                  : ""
              }`}
            >
              <button className="mb-2">
                {componentState === "contact" ? (
                  <ion-icon name="person-circle"></ion-icon>
                ) : (
                  <ion-icon name="person-circle-outline"></ion-icon>
                )}
              </button>
            </li>
          </ul>
        </div>
        {componentState === "experience" && <Experience />}
        {componentState === "education" && <Education />}
        {componentState === "skill" && <Skills />}
        {componentState === "postList" && <Post />}
        {componentState === "contact" && <Contact />}
      </div>
    </div>
  );
};

export default HistoryUser;
