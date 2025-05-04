import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addSticky: (state, action) => {
      const { title, desc } = action.payload;
      state.push({
        _id: nanoid(),
        title: title,
        desc: desc,
        createdAt: new Date().toISOString(),
        doneAt: null,
      });
    },
  },
});

export const { addSticky } = todoSlice.actions;
export default todoSlice.reducer;
