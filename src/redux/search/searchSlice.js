// Redux imports
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Misc imports
import { request } from "@octokit/request";

const initialState = {
  results: {
    incomplete_results: false,
    items: [],
    total_count: 0,
    params: {
      q: "",
      per_page: 0,
      total_count: 0,
    },
  },
  status: "idle",
};

export const fetchUsers = createAsyncThunk(
  "search/fetchUsers",
  async (params) => {
    const { data } = await request("GET /search/users", params);
    return {...data, params };
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearResults(state) {
      state.results = {
        incomplete_results: false,
        items: [],
        total_count: 0,
      };
      state.status = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.results = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status="error";
      });
  }
});

export const { clearResults } = searchSlice.actions;
export default searchSlice.reducer;
