import Experience from "./Experience";

const HistoryUser = () => {
  return (
    <div className="w-full bg-red-200">
      <div className="p-4">
        <div>
          <ul className="flex justify-between items-center text-2xl text-slate-400 mb-3">
            <li className="border-b-2 w-full border-slate-900 text-center ">
              <button className="mb-2">
                <ion-icon name="briefcase-outline"></ion-icon>
              </button>
            </li>
            <li className="border-b-2 w-full border-slate-900 text-center">
              <button className="mb-2">
                <ion-icon name="school-outline"></ion-icon>
              </button>
            </li>
            <li className="border-b-2 w-full border-slate-900 text-center">
              <button className="mb-2">
                <ion-icon name="cog-outline"></ion-icon>
              </button>
            </li>
            <li className="border-b-2 w-full border-slate-900 text-center">
              <button className="mb-2">
                <ion-icon name="newspaper-outline"></ion-icon>
              </button>
            </li>
            <li className="border-b-2 w-full border-slate-900 text-center">
              <button className="mb-2">
                <ion-icon name="person-circle-outline"></ion-icon>
              </button>
            </li>
          </ul>
        </div>

        <Experience />
      </div>
    </div>
  );
};

export default HistoryUser;
