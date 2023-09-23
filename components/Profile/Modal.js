import { useEffect } from "react";

const Modal = (props) => {
  if (!props.isModal) {
    return;
  }

  document.body.classList.add("overflow-hidden");

  useEffect(() => {
    const closeWithEsc = (e) => {
      if (e.key === "Escape" && props.isModal) {
        props.modalCloseBtn();
      }
    };
    document.addEventListener("keydown", closeWithEsc);
    return document.addEventListener("keydown", closeWithEsc);
  }, [props.isModal]);

  return (
    <div className="absolute top-0 left-0 right-0 z-50 ">
      <div className="bg-gray-100 opacity-100 rounded-md absolute left-[40%] top-[20%] z-50">
        <button
          onClick={props.modalCloseBtn}
          className="mt-3 text-3xl absolute right-0 mr-2"
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
        {props.children}
      </div>
      <div
        onClick={props.modalCloseBtn}
        className=" bg-black opacity-50 h-screen max-w-screen"
      ></div>
    </div>
  );
};

export default Modal;
