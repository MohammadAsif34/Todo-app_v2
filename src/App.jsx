import React from "react";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import StickyWall from "./components/container/StickyWall";
import Calendar from "./components/container/Calendar";
import Today from "./components/container/Today";
import Upcomming from "./components/container/Upcomming";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const currSec = useSelector((state) => state.toggles);
  const { isloading } = useAuth0;
  if (isloading) {
    return <div className="w-screen h-screen">loading...</div>;
  }
  return (
    <div className="w-screen h-screen p-4 flex gap-x-5">
      {false ? (
        ""
      ) : (
        <>
          <Sidebar />
          {currSec.currSection === "upcomming" && <Upcomming />}
          {currSec.currSection === "today" && <Today />}
          {currSec.currSection === "calendar" && <Calendar />}
          {currSec.currSection === "sticky-wall" && <StickyWall />}
        </>
      )}
      {/* <MainContainer /> */}
    </div>
  );
};

export default App;
