// Redux imports
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Misc imports
import { request } from "@octokit/request";

const initialState = {
  query: "",
  results: [],
  status: "idle",
};

export const fetchUsers = createAsyncThunk(
  "search/fetchUsers",
  async (params) => {
    const { data } = await request("GET /search/users", params);
    return data;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    clearItems(state) {
      state.results = [];
      state.query = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "idle";
        state.results = action.payload;
      });
  }
});

export const { clearItems, setQuery } = searchSlice.actions;
export default searchSlice.reducer;
