import { Fragment, useState } from "react";
import PhotoCover from "./PhotoCover";
import Header from "./Header";
import ProfileInfo from "./ProfileInfo";
import UserInformation from "./UserInformation";
import Footer from "./Footer";

const MainApp = () => {
  const [isModal, setIsModal] = useState(false);

  const modalOpenBtn = () => {
    setIsModal(true);
  };

  const modalCloseBtn = () => {
    setIsModal(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <Fragment>
      <main className="bg-gradient-to-b from-white to-slate-500 relative">
        <Header />
        <PhotoCover />
        <ProfileInfo />
        <UserInformation
          isModal={isModal}
          modalOpenBtn={modalOpenBtn}
          modalCloseBtn={modalCloseBtn}
        />
      </main>
      <Footer />
    </Fragment>
  );
};

export default MainApp;
