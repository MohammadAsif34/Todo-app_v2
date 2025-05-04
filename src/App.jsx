import React from "react";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import StickyWall from "./components/container/StickyWall";

const App = () => {
  return (
    <div className="w-screen h-screen p-4 flex gap-x-5">
      <Sidebar />
      {/* <MainContainer /> */}
      <StickyWall />
    </div>
  );
};

export default App;
