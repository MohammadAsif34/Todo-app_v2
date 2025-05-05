import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { addSticky } from "../../../appState/appSlice";
import { toggleNoteModal } from "../../../appState/toggleSlice";

const StickyWall = () => {
  //const [noteModel, setNodeModel] = useState(false);
  const { user } = useAuth0;
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
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos);
  const toggle = useSelector((state) => state.toggles);

  const handleAddNote = () => {
    // setNodeModel((prev) => !prev);
    dispatch(toggleNoteModal());
  };

  const idx = 1;

  return (
    <div className="  flex-1">
      <div className="mb-4 flex justify-between">
        <div className="text-4xl font-bold capitalize ">
          sticky wall{" "}
          {todo.stickyNote.length > 0 && (
            <span className="ml-5 text-xl font-normal">
              {todo.stickyNote.length}
            </span>
          )}
        </div>
        <div className="mt-2">
          <button
            onClick={() => handleAddNote()}
            className="px-2 py-1 border rounded-sm cursor-pointer hover:bg-green-200 hover:border-green-900 hover:text-green-900"
          >
            <i className="bi bi-plus mr-1"></i>StickyNote
          </button>
          {toggle.noteModal && <StickyNoteModel />}
        </div>
      </div>

      <div className="h-[calc(100vh-90px)] p-4 border border-gray-300 rounded-md flex flex-wrap justify-centerr items-center gap-3 overflow-y-auto">
        {todo.stickyNote.length == 0 && (
          <div className="w-full h-full  flex justify-center items-center">
            <img src="/emptyNote.png" alt="" className="w-56 opacity-70" />
          </div>
        )}
        {todo?.stickyNote?.map((item, idx) => (
          <div
            className={`min-w-48 max-w-1/5 h-56 px-3 py-2 border-gray-300 rounded-md shadow flex-grow-1 ${
              colors[idx % colors.length]
            }`}
          >
            <h1 className="mb-2 font-semibold capitalize text-lg">
              {item?.title}
            </h1>
            <p className="text-[14px] text-overflow-hidden">{item.desc}</p>
          </div>
        ))}
        {/* <div className="min-w-48 max-w-1/5 h-56 px-3 py-2 border-gray-300 rounded-md shadow flex-grow-1 bg-zinc-100 cursor-pointer">
          <h1 className="w-full h-full flex justify-center items-center text-3xl text-gray-500">
            <i className="bi bi-plus-lg"></i>
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default StickyWall;

const StickyNoteModel = ({ state }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleState = () => {
    state = !state;
  };

  const handleNoteAdd = (e) => {
    e.preventDefault();
    dispatch(addSticky({ title, desc }));
    dispatch(toggleNoteModal());
  };

  return (
    <div className="z-10 w-full h-full bg-black/20 absolute top-0 left-0 flex justify-center items-center transition-all duration-1000 ease-in-out">
      <div className="w-2/5 px-8 py-10 mb-[200px] bg-white border border-gray-300 rounded-lg relative">
        <button
          onClick={() => dispatch(toggleNoteModal())}
          className="absolute top-3 right-3 text-3xl text-gray-300 hover:text-red-500 cursor-pointer"
        >
          <i className="bi bi-x"></i>
        </button>
        <h1 className="mb-4 text-3xl font-semibold capitalize text-center">
          sticky note
        </h1>

        <form className="capitalize" onSubmit={handleNoteAdd}>
          <label className="text-lg font-semibold">title </label>
          <input
            type="text"
            className="w-full h-8 px-3 mb-2 border border-gray-300 rounded-sm"
            placeholder="Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="text-lg font-semibold">tasks </label>
          <textarea
            className="w-full min-h-20 px-3 py-2 mb-2 border border-gray-300 rounded-sm"
            placeholder="Note Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="w-full h-8 border border-gray-300 rounded-sm bg-zinc-100 hover:bg-green-200 hover:text-green-900 hover:border-green-900 cursor-pointer"
          >
            Add note
          </button>
        </form>
      </div>
    </div>
  );
};
