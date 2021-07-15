// Redux imports
  import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Utilities imports
import { request } from "@octokit/request";

const initialState = {
  user: {},
  status: "idle",
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async (username) => {
    const { data } = await request("GET /users/{username}", {
      username
    });
    console.info("userResponse", data);
    return data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser(state) {
      state.user = {};
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
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.status = "error";
      })
  }
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
