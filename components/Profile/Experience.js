import { useEffect, useState } from "react";
import Image from "next/image";

import LogoGoogle from "../../public/googlelogo.webp";
import Modal from "./Modal";

const Experience = (props) => {
  const [countryState, setCountryState] = useState("");
  const [jobTitleState, setJobTitleState] = useState("");
  const [companyNameState, setCompanyNameStateState] = useState("");
  const [isWorking, setIsWorking] = useState(false);
  const [dateStart, setDateStart] = useState("");
  const [yearStart, setYearStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [yearEnd, setYearEnd] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
  const [isValid, setIsValid] = useState(true);

  const [text] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere sequi ipsam cum odit quos mollitia enim blanditiis labore veniam excepturi itaque necessitatibus illum consequuntur voluptas laborum maxime aut, ab dolorum sunt. Eum corporis expedita nihil, perspiciatis quibusdam veniam eaque cum adipisci aut? Magni non facere ullam nisi cumque eaque quos totam cum consectetur rem iusto in doloremque sapiente, veritatis commodi natus voluptatibus voluptatum aliquam neque repellat. Soluta ipsam minima maxime commodi quae, earum error aperiam excepturi, distinctio tempore sequi repellendus sed dolorem, blanditiis inventore exercitationem harum! Necessitatibus explicabo sit, assumenda molestiae optio quam fugiat corrupti, minima rem minus placeat!"
  );
  const [seeMoreBtn, setSeeMoreBtn] = useState(false);

  const countryFormHandler = (e) => {
    setCountryState(e.target.value);
  };

  const jobTitleFormHandler = (e) => {
    setJobTitleState(e.target.value);
  };

  const companyNameFormHandler = (e) => {
    setCompanyNameStateState(e.target.value);
  };

  const isWorkingFormHandler = () => {
    setIsWorking(!isWorking);
  };

  const dateStartFormHandler = (e) => {
    setDateStart(e.target.value);
  };

  const yearStartFormHandler = (e) => {
    setYearStart(e.target.value);
  };

  const dateEndFormHandler = (e) => {
    setDateEnd(e.target.value);
  };
  const yearEndFormHandler = (e) => {
    setYearEnd(e.target.value);
  };

  const descriptionFormHandler = (e) => {
    setDescriptionState(e.target.value);
  };

  const seeMoreHandler = () => {
    setSeeMoreBtn(!seeMoreBtn);
  };

  const submitHanlder = (e) => {
    e.preventDefault();

    console.log("submit");
  };

  useEffect(() => {
    if (
      (countryState.length > 0 &&
        jobTitleState.length > 0 &&
        companyNameState.length > 0 &&
        isWorking &&
        dateStart.length > 0 &&
        yearStart.length > 3 &&
        descriptionState.length > 0) ||
      (countryState.length > 0 &&
        jobTitleState.length > 0 &&
        companyNameState.length > 0 &&
        !isWorking &&
        dateStart.length > 0 &&
        yearStart.length > 3 &&
        dateEnd.length > 0 &&
        yearEnd.length > 3 &&
        descriptionState.length > 0)
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [
    countryState,
    jobTitleState,
    companyNameState,
    isWorking,
    dateStart,
    yearStart,
    descriptionState,
  ]);

  return (
    <div>
      <Modal modalCloseBtn={props.modalCloseBtn} isModal={props.isModal}>
        <div className="text-slate-950">
          <div className="p-3 text-center">
            <h3 className="font-semibold">Add Experience</h3>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisi.
            </p>
          </div>
          <div className="border-[1px] border-gray-500"></div>
          <form className="p-3 text-sm  overflow-y-auto h-96">
            <label htmlFor="country">Country</label>
            <input
              onChange={countryFormHandler}
              type="text"
              id="country"
              placeholder="Enter a country"
              className="bg-transparent block focus:outline-none  mb-3 mt-2 text-sm border border-gray-300 py-1 px-3 rounded-md w-full"
            />
            <label htmlFor="Job Title">Job Title</label>
            <input
              onChange={jobTitleFormHandler}
              type="text"
              id="Job Title"
              placeholder="Enter a position or title"
              className="bg-transparent block focus:outline-none  mb-3 mt-2 text-sm border border-gray-300 py-1 px-3 rounded-md w-full"
            />
            <label htmlFor="company name">Company Name</label>
            <input
              onChange={companyNameFormHandler}
              type="text"
              id="company name"
              placeholder="Ex. Microsoft"
              className="bg-transparent block focus:outline-none  mb-3 mt-2 text-sm border border-gray-300 py-1 px-3 rounded-md w-full"
            />
            <label className="flex items-center gap-2">
              <input
                onChange={isWorkingFormHandler}
                type="checkbox"
                className="w-5 h-5  mb-3 mt-2"
              />
              <p>I'm Currently working in this role</p>
            </label>
            <label htmlFor="start date">Start Date</label>
            <div className="flex gap-3">
              <input
                onChange={dateStartFormHandler}
                type="text"
                id="start date"
                placeholder="Enter a month"
                className="bg-transparent block focus:outline-none  mb-3 mt-2 text-sm border border-gray-300 py-1 px-3 rounded-md w-full"
              />
              <input
                onChange={yearStartFormHandler}
                type="text"
                id="start date year"
                placeholder="Enter a year"
                className="bg-transparent block focus:outline-none  mb-3 mt-2 text-sm border border-gray-300 py-1 px-3 rounded-md w-full"
              />
            </div>
            <label htmlFor="end date">End Date</label>
            <div className="flex gap-3">
              <input
                onChange={dateEndFormHandler}
                type="text"
                id="end date"
                placeholder="Enter a month"
                className={`bg-transparent block focus:outline-none  mb-3 mt-2 text-sm border border-gray-300 py-1 px-3 rounded-md w-full ${
                  isWorking ? "bg-gray-600 opacity-30" : "bg-transparent"
                }`}
                value={isWorking ? "" : dateEnd}
                disabled={isWorking ? true : false}
              />
              <input
                onChange={yearEndFormHandler}
                type="text"
                id="end date year"
                placeholder="Enter a year"
                className={`bg-transparent block focus:outline-none  mb-3 mt-2 text-sm border border-gray-300 py-1 px-3 rounded-md w-full ${
                  isWorking ? "bg-gray-600 opacity-30" : "bg-transparent"
                }`}
                value={isWorking ? "" : yearEnd}
                disabled={isWorking ? true : false}
              />
            </div>

            <label htmlFor="description">Description</label>
            <textarea
              onChange={descriptionFormHandler}
              maxLength={2000}
              id="description"
              placeholder="More info about the role..."
              className="bg-transparent block focus:outline-none  mb-3 mt-2 text-sm border border-gray-300 py-1 px-3 rounded-md w-full"
            ></textarea>
          </form>
          <div className="border-[1px] border-gray-500"></div>
          <div className="p-4 text-center">
            <button
              onClick={submitHanlder}
              className={`${
                !isValid
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-300 text-slate-600"
              }  py-2 w-4/5 rounded-md`}
              disabled={isValid}
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold mb-3">
          Experience <span className="font-normal">(8)</span>
        </h2>
        <button onClick={props.modalOpenBtn} className="text-3xl">
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </div>
      <ul>
        <li className="flex gap-4 border-b-[1px] w-full border-slate-900 mb-5">
          <div className="w-1/5">
            <Image src={LogoGoogle} alt="Logo Google" />
          </div>
          <div className="text-sm text-slate-600">
            <h5 className="text-lg font-semibold text-slate-800">
              Front-End Developer
            </h5>
            <p>Google Indonesia | Full-time</p>
            <p>Aug 2022 - Present</p>
            <p className="mb-4">Jakarta, Indonesia</p>
            <p
              className={` text-slate-700 overflow-hidden ${
                seeMoreBtn ? "inline" : "line-clamp-2"
              }`}
            >
              {text}
            </p>
            {text.length > 100 && !seeMoreBtn && (
              <button
                onClick={seeMoreHandler}
                className="text-slate-800 ml-2 font-semibold cursor-pointer mb-5"
              >
                ...see more
              </button>
            )}

            {seeMoreBtn && (
              <button
                onClick={seeMoreHandler}
                className="ml-2 font-semibold cursor-pointer mb-5 "
              >
                ...close more
              </button>
            )}
          </div>
        </li>
        <li className="flex gap-4 border-b-[1px] w-full border-slate-900 mb-6">
          <div className="w-1/5">
            <Image src={LogoGoogle} alt="Logo Google" />
          </div>
          <div className="text-sm text-slate-600">
            <h5 className="text-lg font-semibold text-slate-800">
              Front-End Developer
            </h5>
            <p>Google Indonesia | Full-time</p>
            <p>Aug 2022 - Present</p>
            <p className="mb-4">Jakarta, Indonesia</p>
            <p
              className={` text-slate-700 overflow-hidden ${
                seeMoreBtn ? "inline" : "line-clamp-2"
              }`}
            >
              {text}
            </p>
            {text.length > 100 && !seeMoreBtn && (
              <button
                onClick={seeMoreHandler}
                className="text-slate-800 ml-2 font-semibold cursor-pointer mb-5"
              >
                ...see more
              </button>
            )}

            {seeMoreBtn && (
              <button
                onClick={seeMoreHandler}
                className="ml-2 font-semibold cursor-pointer mb-5 "
              >
                ...close more
              </button>
            )}
          </div>
        </li>
        <li className="flex gap-4 border-b-[1px] w-full border-slate-900 mb-6">
          <div className="w-1/5">
            <Image src={LogoGoogle} alt="Logo Google" />
          </div>
          <div className="text-sm text-slate-600">
            <h5 className="text-lg font-semibold text-slate-800">
              Front-End Developer
            </h5>
            <p>Google Indonesia | Full-time</p>
            <p>Aug 2022 - Present</p>
            <p className="mb-4">Jakarta, Indonesia</p>
            <p
              className={` text-slate-700 overflow-hidden ${
                seeMoreBtn ? "inline" : "line-clamp-2"
              }`}
            >
              {text}
            </p>
            {text.length > 100 && !seeMoreBtn && (
              <button
                onClick={seeMoreHandler}
                className="text-slate-800 ml-2 font-semibold cursor-pointer mb-5"
              >
                ...see more
              </button>
            )}

            {seeMoreBtn && (
              <button
                onClick={seeMoreHandler}
                className="ml-2 font-semibold cursor-pointer mb-5 "
              >
                ...close more
              </button>
            )}
          </div>
        </li>
        <li className="flex gap-4 border-b-[1px] w-full border-slate-900 mb-6">
          <div className="w-1/5">
            <Image src={LogoGoogle} alt="Logo Google" />
          </div>
          <div className="text-sm text-slate-600">
            <h5 className="text-lg font-semibold text-slate-800">
              Front-End Developer
            </h5>
            <p>Google Indonesia | Full-time</p>
            <p>Aug 2022 - Present</p>
            <p className="mb-4">Jakarta, Indonesia</p>
            <p
              className={` text-slate-700 overflow-hidden ${
                seeMoreBtn ? "inline" : "line-clamp-2"
              }`}
            >
              {text}
            </p>
            {text.length > 100 && !seeMoreBtn && (
              <button
                onClick={seeMoreHandler}
                className="text-slate-800 ml-2 font-semibold cursor-pointer mb-5"
              >
                ...see more
              </button>
            )}

            {seeMoreBtn && (
              <button
                onClick={seeMoreHandler}
                className="ml-2 font-semibold cursor-pointer mb-5 "
              >
                ...close more
              </button>
            )}
          </div>
        </li>
      </ul>
      <div className="flex items-center justify-center bg-gray-200 h-10 text-slate-500 font-semibold gap-3 cursor-pointer rounded">
        <button>See More</button>
        <span className=" pt-1">
          <ion-icon name="arrow-down-outline"></ion-icon>
        </span>
      </div>
    </div>
  );
};

export default Experience;
