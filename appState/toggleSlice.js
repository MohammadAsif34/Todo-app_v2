import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggles",
  initialState: { noteModal: false },
  reducers: {
    toggleNoteModal: (state) => {
      state.noteModal = !state.noteModal;
    },
  },
});

export const { toggleNoteModal } = toggleSlice.actions;
export default toggleSlice.reducer;
