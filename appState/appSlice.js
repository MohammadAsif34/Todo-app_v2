import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    stickyNote: [],
    tasks: [],
  },
  reducers: {
    addSticky: (state, action) => {
      const { title, desc } = action.payload;
      state.stickyNote.push({
        _id: nanoid(),
        title: title,
        desc: desc,
        createdAt: new Date().toISOString(),
        doneAt: null,
      });
    },
    addTask: (state, action) => {
      state.tasks.push({
        _id: nanoid(),
        task: action.payload,
        createdAt: new Date().toISOString(),
        isDone: false,
        doneAt: null,
      });
    },
    taskDone: (state, action) => {
      const idx = state.tasks.findIndex((task) => task._id == action.payload);
      const task = state.tasks[idx];
      task.isDone = !task.isDone;
    },
  },
});

export const { addSticky, addTask, taskDone } = todoSlice.actions;
export default todoSlice.reducer;
