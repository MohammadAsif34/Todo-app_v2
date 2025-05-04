import React from "react";

const Calendar = () => {
  return (
    <div className="  flex-1">
      <div className="mb-4 flex justify-between">
        <div className="text-4xl font-bold capitalize ">calendar </div>
      </div>
      <div className="h-[calc(100vh-90px)] p-4 border border-gray-300 rounded-md flex flex-wrap justify-center gap-x-3 gap-y-4 overflow-y-auto"></div>
    </div>
  );
};

export default Calendar;
