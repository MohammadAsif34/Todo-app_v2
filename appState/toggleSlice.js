import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggles",
  initialState: { noteModal: false, currSection: "sticky-wall" },
  reducers: {
    toggleNoteModal: (state) => {
      state.noteModal = !state.noteModal;
    },
    toggleCurrSection: (state, action) => {
      state.currSection = action.payload;
    },
  },
});

export const { toggleNoteModal, toggleCurrSection } = toggleSlice.actions;
export default toggleSlice.reducer;
