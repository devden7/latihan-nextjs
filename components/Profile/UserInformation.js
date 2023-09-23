import HistoryUser from "./HistoryUser";
import PersonalDescriptions from "./PersonalDescriptions";

const UserInformation = (props) => {
  return (
    <section>
      <div className="flex gap-5 px-4">
        <PersonalDescriptions />
        <HistoryUser
          isModal={props.isModal}
          modalOpenBtn={props.modalOpenBtn}
          modalCloseBtn={props.modalCloseBtn}
        />
      </div>
    </section>
  );
};

export default UserInformation;
