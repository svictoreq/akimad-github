// Redux imports
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: "dark",
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.selected = action.payload;
    },
    toggleTheme(state) {
      state.selected = state.selected === "dark"
        ? "light"
        : "dark";
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
