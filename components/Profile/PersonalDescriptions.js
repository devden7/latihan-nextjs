import About from "./About";
import ProfileStatus from "./ProfileStatus";

const PersonalDescriptions = () => {
  return (
    <div className="w-2/5 flex flex-col gap-4">
      <ProfileStatus />
      <About />
    </div>
  );
};

export default PersonalDescriptions;
