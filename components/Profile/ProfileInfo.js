import Image from "next/image";

import Avatar from "../../public/avatar.svg";

const ProfileInfo = () => {
  return (
    <section className="m-4">
      <div className="bg-white flex justify-between rounded-t-[4rem] items-end px-4 pb-5">
        <ul className="flex gap-2 text-sm">
          <li>
            <p className="font-medium text-center">482</p>
            <p>Views</p>
          </li>
          <p className="pt-1 text-xl">|</p>
          <li>
            <p className="font-medium text-center">542</p>
            <p>Connects</p>
          </li>
          <p className="pt-1 text-xl">|</p>
          <li>
            <p className="font-medium text-center">1,245</p>
            <p>Followers</p>
          </li>
        </ul>
        <div className="relative flex flex-col gap-2 justify-center items-center">
          <div className=" bg-emerald-600 w-52 h-52 rounded-b-full absolute -top-36 p-4">
            <div className="bg-blue-50 rounded-b-full relative">
              <div className="opacity-0 rounded-b-full h-full w-full absolute text-center leading-[10rem] hover:bg-black hover:opacity-60 hover:cursor-pointer">
                <button className=" text-slate-400 text-2xl">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
              </div>
              <Image src={Avatar} />
            </div>
          </div>
          <div className="flex items-center gap-3 mt-20">
            <p className="text-xl font-semibold">Dena Sudarajat</p>
            <div className="w-5 h-5 bg-emerald-600 rounded-full">
              <p className="text-xl text-white text-center">
                <ion-icon name="paw"></ion-icon>
              </p>
            </div>
            <button className="text-xl pt-1">
              <ion-icon name="create-outline"></ion-icon>
            </button>
          </div>
          <div className="flex gap-2 text-sm mx-10">
            <p className="font-medium">Junior Web Developer</p>
            <p>|</p>
            <p>Bandung, Jawa Barat, Indonesia</p>
          </div>
          <button className=" bg-emerald-600 rounded border-slate-800 px-7 py-1 hover:bg-emerald-500 transition duration-200">
            Button
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <button className="border border-b-2 border-r-2 rounded border-slate-800 px-7 py-1 hover:bg-emerald-500 hover:border-none transition duration-200">
            Button
          </button>
          <button className="border border-b-2 border-r-2 rounded border-slate-800 px-7 py-1 hover:bg-emerald-500 hover:border-none transition duration-200">
            Button
          </button>
          <button className=" bg-emerald-600 rounded border-slate-800 px-7 py-1 hover:bg-emerald-500 transition duration-200">
            Button
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
