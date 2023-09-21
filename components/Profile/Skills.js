const Skills = () => {
  return (
    <div>
      <div>
        <h2 className="text-lg font-semibold mb-3">Skills</h2>
      </div>
      <div className="mb-3">
        <h3 className="font-semibold mb-2">Teknikal Skills</h3>
        <div className="flex gap-2 text-slate-800">
          <span className="bg-gray-300 px-2 py-1 rounded  hover:bg-emerald-500 hover:border-none transition duration-200">
            ReactJs
          </span>
          <span className="bg-gray-300 px-2 py-1 rounded  hover:bg-emerald-500 hover:border-none transition duration-200">
            Node.js
          </span>
          <span className="bg-gray-300 px-2 py-1 rounded  hover:bg-emerald-500 hover:border-none transition duration-200">
            Express.js
          </span>
          <span className="bg-gray-300 px-2 py-1 rounded  hover:bg-emerald-500 hover:border-none transition duration-200">
            MongoDB
          </span>
          <span className="bg-gray-300 px-2 py-1 rounded  hover:bg-emerald-500 hover:border-none transition duration-200">
            MySQL
          </span>
          <span className="bg-gray-300 px-2 py-1 rounded  hover:bg-emerald-500 hover:border-none transition duration-200">
            Git
          </span>
        </div>
      </div>
      <div className="mb-3">
        <h3 className="font-semibold mb-2">Soft Skills</h3>
        <div className="flex gap-2 text-slate-800">
          <span className="bg-gray-300 px-2 py-1 rounded  hover:bg-emerald-500 hover:border-none transition duration-200">
            Komunikasi
          </span>
          <span className="bg-gray-300 px-2 py-1 rounded  hover:bg-emerald-500 hover:border-none transition duration-200">
            Kolaborasi
          </span>
          <span className="bg-gray-300 px-2 py-1 rounded  hover:bg-emerald-500 hover:border-none transition duration-200">
            Problem Solving
          </span>
          <span className="bg-gray-300 px-2 py-1 rounded  hover:bg-emerald-500 hover:border-none transition duration-200">
            Time Management
          </span>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-3">Bahasa</h2>
      </div>
      <div className="mb-3">
        <div className="flex gap-2 text-slate-800">
          <span className="bg-gray-300 px-2 py-1 rounded  hover:bg-emerald-500 hover:border-none transition duration-200">
            Bahasa Indonesia
          </span>
          <span className="bg-gray-300 px-2 py-1 rounded  hover:bg-emerald-500 hover:border-none transition duration-200">
            English (Pasif)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
