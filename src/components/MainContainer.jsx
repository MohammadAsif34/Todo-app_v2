import React from "react";

const MainContainer = () => {
  return (
    <div className=" border flex-1">
      <div className="text-4xl font-bold">
        Upcomming <span className="ml-5 text-xl font-normal">{5}</span>
      </div>
      <div class="group inline-block cursor-pointer">
        <i class="bi bi-person` transition-transform transform group-hover:translate-x-2"></i>
      </div>
    </div>
  );
};

export default MainContainer;
