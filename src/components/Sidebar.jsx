import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
  const { user, isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const colors = [
    "bg-red-200",
    "bg-green-200",
    "bg-orange-200",
    // "bg-zinc-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-blue-200",
    "bg-teal-200",
  ];

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div className="w-[300px] h-full px-4 py-2 rounded-xl bg-gray-100 flex flex-col gap-y-4 relative">
      {/* header section  */}
      <div className="w-full flex justify-between items-center  text-xl font-semibold capitalize ">
        <div className="flex items-center">
          <img src="/logo.png" alt="" className="w-8 cursor-pointer" />
          <span className="">menu</span>
        </div>
        <span className=" text-gray-500">
          <i className="bi bi-list"></i>
        </span>
      </div>

      {/* search section  */}
      <div className=" h-8 text-gray-500 rounded-sm border border-gray-300 flex items-center">
        <i className="bi bi-search px-2"></i>
        <input
          type="text"
          placeholder="Search"
          className="flex-1 h-full px-2"
        />
      </div>

      {/* types of task section  */}
      <div className="">
        <h1 className="text-[14px] uppercase font-semibold">tasks</h1>
        <ul className="px-2 capitalize text-sm ">
          <li className="group px-2 py-1.5 hover:bg-gray-200 rounded-sm hover:text-black">
            <i className="bi bi-chevron-double-right mr-2"></i>upcomming{" "}
            <span className="text-[12px] font-semibold float-end px-1.5 bg-gray-200 rounded-sm group-hover:bg-white">
              {23}
            </span>
          </li>
          <li className="group px-2 py-1.5 hover:bg-gray-200 rounded-sm hover:text-black">
            <i className="bi bi-list-task mr-2"></i>today{" "}
            <span className="text-[12px] font-semibold float-end px-1.5 bg-gray-200 rounded-sm group-hover:bg-white">
              {23}
            </span>
          </li>
          <li className="group px-2 py-1.5 hover:bg-gray-200 rounded-sm hover:text-black">
            <i class="bi bi-calendar3 mr-2"></i>calender{" "}
            <span className="text-[12px] font-semibold float-end px-1.5 bg-gray-200 rounded-sm group-hover:bg-white">
              {23}
            </span>
          </li>
          <li className="group px-2 py-1.5 hover:bg-gray-200 rounded-sm hover:text-black">
            <i className="bi bi-clipboard-check mr-2"></i>sticky wall{" "}
            <span className="text-[12px] font-semibold float-end px-1.5 bg-gray-200 rounded-sm group-hover:bg-white">
              {23}
            </span>
          </li>
        </ul>
      </div>

      {/* types of work section  */}
      <div>
        <h1 className="text-[14px] uppercase font-semibold">lists</h1>
        <ul className="px-2 capitalize text-sm">
          <li className="group px-2 py-1.5 hover:bg-gray-200 rounded-sm hover:text-black">
            <i className="bi bi-square-fill text-[10px] text-rose-300 mr-2"></i>
            upcomming{" "}
            <span className="text-[12px] font-semibold float-end px-1.5 bg-gray-200 rounded-sm group-hover:bg-white">
              {23}
            </span>
          </li>
          <li className="group px-2 py-1.5 hover:bg-gray-200 rounded-sm hover:text-black">
            <i className="bi bi-square-fill text-[10px] text-purple-300 mr-2"></i>
            work{" "}
            <span className="text-[12px] font-semibold float-end px-1.5 bg-gray-200 rounded-sm group-hover:bg-white">
              {23}
            </span>
          </li>
          <li className="group px-2 py-1.5 hover:bg-gray-200 rounded-sm hover:text-black">
            <i className="bi bi-square-fill text-[10px] text-green-300 mr-2"></i>
            list 1{" "}
            <span className="text-[12px] font-semibold float-end px-1.5 bg-gray-200 rounded-sm group-hover:bg-white">
              {23}
            </span>
          </li>
          <li className="group px-2 py-1.5  hover:bg-gray-200 rounded-sm hover:text-black flex items-center">
            <i className="bi bi-plus-lg mr-2"></i>
            <span>add new list</span>
          </li>
        </ul>
      </div>

      {/* tag section  */}
      <div>
        <h1 className="text-[14px] uppercase font-semibold">tags</h1>
        <ul className="px-2 py-1 capitalize text-sm flex gap-2 flex-wrap">
          <li className="w-fit px-2 py-1 bg-gray-200 rounded-sm">
            <span>tag 1 tag</span>
          </li>
          <li className="w-fit px-2 py-1 bg-gray-200 rounded-sm">
            <span>tags 2</span>
          </li>
          <li className="w-fit px-2 py-1 bg-gray-200 rounded-sm">
            <span>tag 1</span>
          </li>
          <li className="w-fit px-2 py-1 bg-gray-200 rounded-sm">
            <span>tags 2</span>
          </li>
          <li className="w-fit px-2 py-1 bg-gray-200 rounded-sm">
            <span>tag 1</span>
          </li>
          <li className="w-fit px-2 py-1 bg-gray-200 rounded-sm">
            <span>tags 2</span>
          </li>
          <li className="w-fit px-2 py-1 bg-gray-200 rounded-sm">
            <i className="bi bi-plus"></i>
            <span>add tags</span>
          </li>
        </ul>
      </div>

      {/* profile and settings  */}
      <div className="absolute bottom-3 left-4 flex items-center gap-x-5">
        {/* {JSON.stringify(user)} */}
        {isAuthenticated ? (
          <>
            <div className="w-14 h-14 bg-gray-300 rounded-full  overflow-hidden">
              <img
                src={user?.picture || "/logo.png"}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="">
              <p>{user.name || "name"}</p>
              <p className="text-[12px] capitalize">
                role:{" "}
                <span className="mx-2 px-2 py-0.5 bg-green-200 rounded-sm">
                  {"user"}
                </span>
              </p>
            </div>
          </>
        ) : (
          <div>
            <button
              onClick={() => handleLogin()}
              className="px-3 py-1 border rounded-sm capitalize  hover:bg-black hover:text-white cursor-pointer"
            >
              <i className="bi bi-box-arrow-in-right pr-3 text-xl"></i>Sign in
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
