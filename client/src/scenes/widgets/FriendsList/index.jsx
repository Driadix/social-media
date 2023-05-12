import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFriendsList } from 'redux/slices/user';

import { Box, Typography, useTheme } from '@mui/material';

import Friend from 'components/Friend';
import WidgetWrapper from 'components/WidgetWrapper';
import { BASE_URL, USER_EP } from 'utils/api';
import getFriendsListStyles from './styles';

const FriendsListWidget = ({ userId }) => {
  const [friendState, setFriendState] = React.useState([]);
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const styles = getFriendsListStyles(palette);
  const token = useSelector((state) => state.user.token);
  const friendsList = useSelector((state) => state.user.user.friendsList);

  const getUserFriends = async () => {
    fetch(
      `${BASE_URL}${USER_EP}/${userId}/friends`,
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      },
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((res) => {
        if (!res) Promise.reject(res);
        setFriendState(res);
        const friendsIds = res.map(({ _id }) => _id);
        dispatch(setFriendsList({ friendsList: friendsIds }));
      })
      .catch((error) => {
        console.log('API: ', error);
      });
  };

  React.useEffect(() => {
    getUserFriends();
  }, [friendsList.length]);

  return (
    <WidgetWrapper>
      <Typography
        variant="h5"
        sx={styles.friendsListText}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friendState.map((friend) => (
          <Friend
            key={friend._id}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.job}
            userImageLink={friend.imageLink}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendsListWidget;
