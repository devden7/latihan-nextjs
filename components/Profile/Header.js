import Avatar from "../../public/avatar.svg";
import Image from "next/image";

const Header = () => {
  return (
    <nav className=" h-16  flex justify-between items-center gap-9 px-7">
      <p className="font-bold tracking-widest text-4xl ">LOGO</p>
      <div className="bg-slate-200 w-full my-2 h-3/5 p-3 flex justify-between items-center text-slate-800 rounded">
        <p className="text-2xl">
          <ion-icon name="globe-outline"></ion-icon>
        </p>
        <p className=" text-sm ">Menu</p>
        <button className=" pt-2">
          <ion-icon name="chevron-down-outline"></ion-icon>
        </button>
        <p> | </p>
        <input
          type="search"
          placeholder="Search..."
          className=" bg-slate-200 w-10/12 p-1"
        />
        <button className="w-12 h-7 rounded bg-emerald-600 text-white text-2xl">
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>
      <button className="text-2xl">
        <ion-icon name="mail"></ion-icon>
      </button>
      <button className="text-2xl">
        <ion-icon name="notifications-outline"></ion-icon>
      </button>
      <div className="flex items-center justify-center border border-slate-900 w-28 h-10 rounded">
        <Image src={Avatar} alt="profile-avatar" className="w-5/6 h-5/6" />
        <button>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </button>
      </div>
    </nav>
  );
};

export default Header;
