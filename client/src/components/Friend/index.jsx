import { PersonAddOutlined, PersonRemoveOutlined, DeleteOutline } from '@mui/icons-material';
import {
  Box, IconButton, Typography, useTheme,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFriendsList } from 'redux/slices/user';
import { BASE_URL, USER_EP } from 'utils/api';
import FlexBoxStyled from 'components/FlexBoxStyled';
import UserImage from 'components/UserImage';
import getFriendStyles from './styles';

const Friend = ({
  friendId, name, subtitle, userImageLink, isOwnPost = false, onPostRemove,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, friendsList } = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const { palette } = useTheme();
  const styles = getFriendStyles(palette);

  const isFriend = friendsList.find((friend) => friend === friendId);

  const handlePostRemove = () => {
    onPostRemove();
  };

  const addFriend = async () => {
    fetch(
      `${BASE_URL}${USER_EP}/${_id}/${friendId}`,
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
        dispatch(setFriendsList({ friendsList: res.friendsList }));
      })
      .catch((error) => {
        console.log('API: ', error);
      });
  };

  const removeFriend = async () => {
    fetch(
      `${BASE_URL}${USER_EP}/${_id}/${friendId}`,
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
        console.log(res);
        if (!res) Promise.reject(res);
        dispatch(setFriendsList({ friendsList: res.friendsList }));
      })
      .catch((error) => {
        console.log('API: ', error);
      });
  };

  const updateFriend = () => {
    if (isFriend) removeFriend();
    else addFriend();
  };

  return (
    <FlexBoxStyled justifyContent="space-between">
      <FlexBoxStyled justifyContent="space-between" gap="1rem">
        <UserImage image={userImageLink} size="55px" />
        <Box
          onClick={() => {
            navigate(`/${friendId}`);
            navigate(0);
          }}
        >
          <Typography variant="h5" sx={styles.nameText}>
            {name}
          </Typography>
          <Typography sx={styles.subtitleText}>
            {subtitle}
          </Typography>
        </Box>
      </FlexBoxStyled>
      {!isOwnPost
        ? (
          <IconButton
            onClick={() => updateFriend(isFriend)}
            sx={styles.updateButton}
          >
            {isFriend ? (
              <PersonRemoveOutlined sx={{ color: palette.primary.dark }} />
            ) : (
              <PersonAddOutlined sx={{ color: palette.primary.dark }} />
            )}
          </IconButton>
        ) : (
          <IconButton
            onClick={handlePostRemove}
            sx={styles.updateButton}
          >
            <DeleteOutline sx={{ color: palette.primary.dark }} />
          </IconButton>
        )}
    </FlexBoxStyled>
  );
};

export default Friend;
