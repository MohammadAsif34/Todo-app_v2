import React from "react";

const StickyWall = () => {
  const colors = [
    "bg-red-200",
    "bg-green-200",
    "bg-orange-200",
    // "bg-zinc-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-blue-200",
    "bg-teal-200",
    // "bg-cyan-200",
    // "bg-yellow-100",
    // "bg-fuchsia-200",
    // "bg-rose-200",
  ];
  const idx = 1;
  return (
    <div className="  flex-1">
      <div className="mb-4 text-4xl font-bold capitalize">
        sticky wall <span className="ml-5 text-xl font-normal">{5}</span>
      </div>
      <div className="h-[calc(100vh-90px)] p-4 border border-gray-300 rounded-md flex flex-wrap justify-center gap-x-8 gap-y-4 overflow-y-auto">
        {[...Array(20)].map((item, idx) => (
          <div
            className={`min-w-48 max-w-1/5 h-56 px-3 py-2 border-gray-300 rounded-md shadow flex-grow-1 ${
              colors[idx % colors.length]
            }`}
          >
            <h1 className="font-semibold capitalize text-lg">header</h1>
          </div>
        ))}
        <div
          className={`min-w-48 max-w-1/5 h-56 px-3 py-2 border-gray-300 rounded-md shadow flex-grow-1 bg-zinc-100`}
        >
          <h1 className="w-full h-full flex justify-center items-center text-3xl text-gray-500"><i className="bi bi-plus-lg"></i></h1>
        </div>
      </div>
    </div>
  );
};

export default StickyWall;
