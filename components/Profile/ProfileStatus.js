const ProfileStatus = () => {
  return (
    <div className="bg-white rounded p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold mb-2">Profile Status</h1>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
      <h4 className="text-md font-semibold mb-2">Intermediate</h4>
      <p className="text-sm mb-2">Compelete 2 steps to achieve Expert!</p>
      <div className="bg-slate-300 rounded shadow-[inset_0px_2px_4px_#52525b]">
        <div className="h-7 bg-red-600 w-[70%] rounded mb-4">
          <p className="font-medium text-white text-center">70%</p>
        </div>
      </div>
      <div className="overflow-y-auto h-80">
        <ul>
          <li className="bg-gray-300 rounded p-3 mb-3">
            <h5 className="font-semibold mb-2">
              Which industry do you work in?
            </h5>
            <p className="text-sm mb-3">
              Members who add an indsutry receive up to 2.5 times as many
              profile views
            </p>
            <button className="border border-slate-900 py-1 px-4 rounded text-sm font-semibold">
              Button
            </button>
          </li>
          <li className="bg-gray-300 rounded p-3 mb-3">
            <h5 className="font-semibold mb-2">
              Which industry do you work in?
            </h5>
            <p className="text-sm mb-3">
              Members who add an indsutry receive up to 2.5 times as many
              profile views
            </p>
            <button className="border border-slate-900 py-1 px-4 rounded text-sm font-semibold">
              Button
            </button>
          </li>
          <li className="bg-gray-300 rounded p-3 mb-3">
            <h5 className="font-semibold mb-2">
              Which industry do you work in?
            </h5>
            <p className="text-sm mb-3">
              Members who add an indsutry receive up to 2.5 times as many
              profile views
            </p>
            <button className="border border-slate-900 py-1 px-4 rounded text-sm font-semibold">
              Button
            </button>
          </li>
          <li className="bg-gray-300 rounded p-3 mb-3">
            <h5 className="font-semibold mb-2">
              Which industry do you work in?
            </h5>
            <p className="text-sm mb-3">
              Members who add an indsutry receive up to 2.5 times as many
              profile views
            </p>
            <button className="border border-slate-900 py-1 px-4 rounded text-sm font-semibold">
              Button
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileStatus;
