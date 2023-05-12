import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPost, deletePost } from 'redux/slices/post';
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from '@mui/icons-material';
import {
  Box, Divider, IconButton, Typography, useTheme,
} from '@mui/material';

import FlexBoxStyled from 'components/FlexBoxStyled';
import Friend from 'components/Friend';
import WidgetWrapper from 'components/WidgetWrapper';

import { BASE_URL, POST_EP } from 'utils/api';

const PostWidget = ({
  postId, owner, description, postImage, likes, comments,
}) => {
  const [isCommentsOpened, setIsCommentsOpened] = React.useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const loggedInUserId = useSelector((state) => state.user.user._id);
  const isLiked = likes.some((like) => like === loggedInUserId);
  const isOwnPost = loggedInUserId === owner._id;

  const { palette } = useTheme();

  const postUserFullName = `${owner.firstName} ${owner.lastName}`;

  const removePost = () => {
    fetch(
      `${BASE_URL}${POST_EP}/${postId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((res) => {
        console.log('res is: ', res);
        if (!res) Promise.reject(res);
        dispatch(deletePost({ _id: res._id }));
      })
      .catch((error) => {
        console.log('API: ', error);
      });
  };

  const likePost = () => {
    fetch(
      `${BASE_URL}${POST_EP}/${postId}/like`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((res) => {
        if (!res) Promise.reject(res);
        dispatch(setPost({ post: res }));
      })
      .catch((error) => {
        console.log('API: ', error);
      });
  };

  const dislikePost = () => {
    fetch(
      `${BASE_URL}${POST_EP}/${postId}/like`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((res) => {
        if (!res) Promise.reject(res);
        dispatch(setPost({ post: res }));
      })
      .catch((error) => {
        console.log('API: ', error);
      });
  };

  const updateLikePost = () => {
    if (isLiked) dislikePost();
    else likePost();
  };

  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={owner._id}
        name={postUserFullName}
        subtitle={owner.address}
        userImageLink={owner.imageLink}
        onPostRemove={removePost}
        isOwnPost={isOwnPost}
      />
      <Typography color={palette.neutral.main} sx={{ mt: '1rem' }}>
        {description}
      </Typography>
      {postImage && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: '0.75rem', marginTop: '0.75rem' }}
          src={`http://localhost:3001/assets/${postImage}`}
        />
      )}
      <FlexBoxStyled justifyContent="space-between" mt="0.25rem">
        <FlexBoxStyled justifyContent="space-between" gap="1rem">
          <FlexBoxStyled justifyContent="space-between" gap="0.3rem">
            <IconButton onClick={updateLikePost}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: palette.primary.main }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likes.length}</Typography>
          </FlexBoxStyled>

          <FlexBoxStyled justifyContent="space-between" gap="0.3rem">
            <IconButton onClick={() => setIsCommentsOpened(!isCommentsOpened)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBoxStyled>
        </FlexBoxStyled>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBoxStyled>
      {isCommentsOpened && (
        <Box mt="0.5rem">
          {comments.map((comment, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Box key={`${owner._id}-${i}`}>
              <Divider />
              <Typography sx={{ color: palette.neutral.main, m: '0.5rem 0', pl: '1rem' }}>
                {comment}
              </Typography>
            </Box>
          ))}
          <Divider />
        </Box>
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;
