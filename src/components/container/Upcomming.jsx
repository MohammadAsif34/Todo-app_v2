import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, taskDone } from "../../../appState/appSlice";

const Upcomming = () => {
  return (
    <div className="  flex-1">
      <div className="mb-4 flex justify-between">
        <div className="text-4xl font-bold capitalize ">upcomming </div>
      </div>

      <div className="h-[calc(100vh-90px)] flex flex-col gap-y-3">
        {/* Today note  */}
        <div className="flex-1 w-full p-1 border border-gray-300 rounded-md">
          <DayCard title={"today"} />
        </div>
        <div className="flex-1 flex gap-x-5 ">
          {/* Tomorrow note  */}
          <div className="flex-1 p-1 border border-gray-300 rounded-md flex flex-wrap justify-center gap-x-3 gap-y-4 overflow-y-auto">
            <DayCard title={"tomorrow"} />
          </div>

          {/* This week note  */}
          <div className="flex-1 p-1 border border-gray-300 rounded-md flex flex-wrap justify-center gap-x-3 gap-y-4 overflow-y-auto">
            <DayCard title={"this week"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcomming;

const DayCard = ({ title }) => {
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [taskChecked, setTaskChecked] = useState(false);

  const handleCheckTask = (_id) => {
    dispatch(taskDone(_id));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    // alert("new taks:: " + task);
    dispatch(addTask(task.trim()));
    setTask("");
  };

  return (
    <div className="w-full h-full px-3 py-1 relative">
      {/* headeing  */}
      <div className="w-full mb-2 sticky top-0">
        <p className="capitalize text-xl font-semibold">{title}</p>
      </div>
      {/* task input  */}
      <div className="w-full h-10 px-2 mb-1 border border-gray-300 text-gray-500 rounded-lg flex items-center">
        <i className="bi bi-plus"></i>
        <form onSubmit={handleAddTask} className="w-full flex">
          <input
            type="text"
            className="w-full h-full px-2 outline-none "
            placeholder="Add New Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          {task.trim() != "" && (
            <button
              type="submit"
              className="px-3 border border-green-300 text-green-500 hover:text-white hover:bg-green-300 rounded-sm cursor-pointer"
            >
              Add
            </button>
          )}
        </form>
      </div>

      {/* {JSON.stringify(tasks)} */}
      {/* tasks  */}
      <div className=" w-full h-[200px]  custom-scrolbar overflow-auto">
        {tasks.map((item, idx) => (
          <div
            key={idx}
            className="px-4 py-1.5 border-b border-gray-300 text-gray-500 flex items-center justify-between"
          >
            <p className="flex items-center  cursor-default">
              <span
                className="transition-transform duration-300 ease-in-out  "
                onClick={() => handleCheckTask(item._id)}
              >
                {item.isDone ? (
                  <i className="bi bi-check-square-fill text-green-400 text-[10px]  mr-3 cursor-pointer"></i>
                ) : (
                  <i className="bi bi-square text-[10px]  mr-3 cursor-pointer"></i>
                )}
              </span>
              <span className={`${item.isDone && "line-through"}`}>
                {item.task}
              </span>
            </p>
            <span>
              <i className="bi bi-chevron-right text-[12px]  cursor-pointer"></i>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
