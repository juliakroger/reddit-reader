import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoading: true,
  isAuthenticated: false,
  user: null,
  posts: null,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    updateUser(state, { payload }) {
      return {
        ...state,
        user: payload,
      };
    },
    updatePosts(state, { payload }) {
      return {
        ...state,
        posts: payload,
      };
    },
    getMainPagePosts: (state) => state,
    updateLoading(state, { payload }) {
      return {
        ...state,
        isLoading: payload,
      };
    },
  },
});

export const {
  updateUser,
  updatePosts,
  getMainPagePosts,
  updateLoading,
} = mainSlice.actions;

export default mainSlice.reducer;
