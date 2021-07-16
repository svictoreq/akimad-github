import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search/searchSlice";
import userReducer from "./userSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    user: userReducer,
    theme: themeReducer,
  },
});
