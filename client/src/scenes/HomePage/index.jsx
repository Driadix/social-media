import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import Navbar from 'scenes/Navbar';
import UserWidget from 'scenes/widgets/User';
import MyPostWidget from 'scenes/widgets/MyPost';
import PostsWidget from 'scenes/widgets/Posts';
import AdvertWidget from 'scenes/widgets/Advert';
import FriendsListWidget from 'scenes/widgets/FriendsList';
import getHomePageStyles from './styles';

const HomePage = () => {
  const isNonMobile = useMediaQuery('(min-width:1000px)');
  const { _id, imageLink } = useSelector((state) => state.user.user);
  const styles = getHomePageStyles(isNonMobile);

  return (
    <Box>
      <Navbar />
      <Box sx={styles.widgetsContainer}>
        <Box sx={styles.userWidgetContainer}>
          <UserWidget userId={_id} imageLink={imageLink} />
        </Box>
        <Box sx={styles.postsWidgetContainer}>
          <MyPostWidget imageLink={imageLink} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobile && (
        <Box flexBasis="26%">
          <AdvertWidget />
          <Box m="2rem 0" />
          <FriendsListWidget userId={_id} />
        </Box>
        )}
      </Box>
    </Box>
  );
};
export default HomePage;
