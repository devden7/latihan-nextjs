import { Fragment } from "react";
import PhotoCover from "./PhotoCover";
import Header from "./Header";
import ProfileInfo from "./ProfileInfo";
import UserInformation from "./UserInformation";
import Footer from "./Footer";

const MainApp = () => {
  return (
    <Fragment>
      <Header />
      <main className="bg-gradient-to-b from-white to-slate-500 ">
        <PhotoCover />
        <ProfileInfo />
        <UserInformation />
      </main>
      <Footer />
    </Fragment>
  );
};

export default MainApp;
