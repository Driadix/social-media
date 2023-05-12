import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from 'scenes/Navbar';
import FriendListWidget from 'scenes/widgets/FriendsList';
import PostsWidget from 'scenes/widgets/Posts';
import UserWidget from 'scenes/widgets/User';
import { BASE_URL, USER_EP } from 'utils/api';
import getProfilePageStyles from './styles';

const ProfilePage = () => {
  const [user, setUser] = React.useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.user.token);
  const isNonMobile = useMediaQuery('(min-width:1000px)');

  const styles = getProfilePageStyles(isNonMobile);

  const getUser = async () => {
    fetch(`${BASE_URL}${USER_EP}/${userId}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((res) => {
        if (!res) Promise.reject(res);
        setUser(res);
      })
      .catch((error) => {
        console.log('API: ', error);
      });
  };

  React.useEffect(() => {
    getUser();
  }, []);

  if (!user) return null;

  return (
    <Box>
      <Navbar />
      <Box
        sx={styles.mainContainer}
      >
        <Box sx={styles.userContainer}>
          <UserWidget userId={userId} imageLink={user.imageLink} />
          <Box m="2rem 0" />
          <FriendListWidget userId={userId} />
        </Box>
        <Box sx={styles.postsContainer}>
          <Box m="2rem 0" />
          <PostsWidget userId={userId} isProfilePage />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
