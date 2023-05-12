import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload._id);
    },
  },
});

export const { setPosts, setPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
