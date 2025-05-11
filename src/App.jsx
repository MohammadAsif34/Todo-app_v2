import React from "react";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import StickyWall from "./components/container/StickyWall";
import Calendar from "./components/container/Calendar";
import Today from "./components/container/Today";
import Upcomming from "./components/container/Upcomming";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../todo-app/src/components/Dashboard";

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
          <div>
            <Sidebar />
          </div>
          <div className=" w-full h-[calc(100vh-30px)]">
            {/* <p>
              {currSec.currSection}{" "}
              {<p>asif</p> &&
                ["dasboard", "home"].includes(currSec.currSection)}
            </p> */}
            {currSec.currSection === "upcomming" && <Upcomming />}
            {currSec.currSection === "today" && <Today />}
            {currSec.currSection === "calendar" && <Calendar />}
            {currSec.currSection === "sticky-wall" && <StickyWall />}
            {currSec.currSection === "home" && (
              <Dashboard state={currSec.currSection} />
            )}
            {currSec.currSection === "dashboard" && (
              <Dashboard state={currSec.currSection} />
            )}
            {currSec.currSection === "profile" && (
              <Dashboard state={currSec.currSection} />
            )}
            {currSec.currSection === "setting" && (
              <Dashboard state={currSec.currSection} />
            )}
            {/* {["home", "dashboard", "profile", "setting"].includes(
              currSec.currSection
            ) && <Dashboard state={currSec.currSection} />} */}
          
          </div>
        </>
      )}
      {/* <MainContainer /> */}
    </div>
  );
};

export default App;
