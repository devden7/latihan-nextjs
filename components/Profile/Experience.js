import Image from "next/image";

import LogoGoogle from "../../public/googlelogo.webp";
import { useState } from "react";
const Experience = () => {
  const [text] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere sequi ipsam cum odit quos mollitia enim blanditiis labore veniam excepturi itaque necessitatibus illum consequuntur voluptas laborum maxime aut, ab dolorum sunt. Eum corporis expedita nihil, perspiciatis quibusdam veniam eaque cum adipisci aut? Magni non facere ullam nisi cumque eaque quos totam cum consectetur rem iusto in doloremque sapiente, veritatis commodi natus voluptatibus voluptatum aliquam neque repellat. Soluta ipsam minima maxime commodi quae, earum error aperiam excepturi, distinctio tempore sequi repellendus sed dolorem, blanditiis inventore exercitationem harum! Necessitatibus explicabo sit, assumenda molestiae optio quam fugiat corrupti, minima rem minus placeat!"
  );

  const [seeMoreBtn, setSeeMoreBtn] = useState(false);

  const seeMoreHandler = () => {
    setSeeMoreBtn(!seeMoreBtn);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold mb-3">
          Experience <span className="font-normal">(8)</span>
        </h2>
        <button className="text-3xl">
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
    </div>
  );
};

export default Experience;
