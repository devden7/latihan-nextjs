import HistoryUser from "./HistoryUser";
import PersonalDescriptions from "./PersonalDescriptions";

const UserInformation = () => {
  return (
    <section>
      <div className="flex gap-5 px-4">
        <PersonalDescriptions />
        <HistoryUser />
      </div>
    </section>
  );
};

export default UserInformation;
