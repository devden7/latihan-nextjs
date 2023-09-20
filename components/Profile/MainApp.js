import { Fragment } from "react";
import PhotoCover from "./PhotoCover";
import Header from "./Header";
import ProfileInfo from "./ProfileInfo";
import UserInformation from "./UserInformation";

const MainApp = () => {
  return (
    <Fragment>
      <Header />
      <main className="bg-gradient-to-b from-white to-slate-500 ">
        <PhotoCover />
        <ProfileInfo />
        <UserInformation />
      </main>
    </Fragment>
  );
};

export default MainApp;
