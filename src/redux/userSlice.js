// Redux imports
  import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Utilities imports
import { request } from "@octokit/request";

const initialState = {
  data: {},
  status: "idle",
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async (username) => {
    const { data } = await request("GET /users/{username}", {
      username
    });
    const repos = await request("GET /users/{username}/repos", {
      username,
      per_page: 9,
      sort: "pushed",
    });
    const organizations = await request("GET /users/{username}/orgs", {
      username
    });
    return {
      ...data,
      repositories: repos.data,
      organizations: organizations.data,
    };
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser(state) {
      state.data = {};
      state.status = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.status = "error";
      })
  }
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
