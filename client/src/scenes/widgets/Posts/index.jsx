import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from 'redux/slices/post';
import { BASE_URL, POST_EP } from 'utils/api';
import PostWidget from '../Post';

const PostsWidget = ({ userId, isProfilePage = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const token = useSelector((state) => state.user.token);

  const getFeedPosts = async () => {
    fetch(
      `${BASE_URL}${POST_EP}`,
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      },
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((res) => {
        if (!res) Promise.reject(res);
        dispatch(setPosts({ posts: res }));
      })
      .catch((error) => {
        console.log('API: ', error);
      });
  };

  const getUserPosts = async () => {
    fetch(
      `${BASE_URL}${POST_EP}/${userId}`,
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      },
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((res) => {
        if (!res) Promise.reject(res);
        dispatch(setPosts({ posts: res }));
      })
      .catch((error) => {
        console.log('API: ', error);
      });
  };
};

export default PostsWidget;
