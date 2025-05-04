import React from "react";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import StickyWall from "./components/container/StickyWall";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
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
          <StickyWall />
        </>
      )}
      {/* <MainContainer /> */}
    </div>
  );
};

export default App;
