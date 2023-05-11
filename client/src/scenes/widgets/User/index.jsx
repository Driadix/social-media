import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Box, Typography, Divider, useTheme,
} from '@mui/material';
import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from '@mui/icons-material';

import UserImage from 'components/UserImage';
import FlexBoxStyled from 'components/FlexBoxStyled';
import WidgetWrapper from 'components/WidgetWrapper';
import { BASE_URL } from 'utils/api';
import getUserWidgetStyles from './styles';

const UserWidget = ({ userId, imageLink }) => {
  const [user, setUser] = React.useState(null);

  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  const { palette } = useTheme();

  const styles = getUserWidgetStyles(palette);

  const getUserInfo = async () => {
    fetch(
      `${BASE_URL}/users/${userId}`,
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      },
    )
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
    getUserInfo();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <WidgetWrapper>
      <FlexBoxStyled
        sx={styles.headerContainer}
        onClick={() => navigate(`/${userId}`)}
      >
        <FlexBoxStyled gap="1rem">
          <UserImage image={imageLink} />
          <Box>
            <Typography
              variant="h4"
              sx={styles.headerName}
            >
              {`${user.firstName} ${user.lastName}`}
            </Typography>
            <Typography color={palette.neutral.medium}>
              {`${user.friendsList.length} friends`}
            </Typography>
          </Box>
        </FlexBoxStyled>
        <ManageAccountsOutlined />
      </FlexBoxStyled>

      <Divider />

      <Box p="1rem 0">
        <Box sx={styles.addressContainer}>
          <LocationOnOutlined fontSize="large" sx={{ color: palette.neutral.main }} />
          <Typography color={palette.neutral.medium}>{user.address}</Typography>
        </Box>
        <Box sx={styles.jobContainer}>
          <WorkOutlineOutlined fontSize="large" sx={{ color: palette.neutral.main }} />
          <Typography color={palette.neutral.medium}>{user.job}</Typography>
        </Box>
      </Box>

      <Divider />

      <Box p="1rem 0">
        <FlexBoxStyled justifyContent="space-between" mb="0.5rem">
          <Typography color={palette.neutral.medium}>Who&#39;s viewed your profile</Typography>
          <Typography color={palette.neutral.main} fontWeight="500">
            {user.profileViews}
          </Typography>
        </FlexBoxStyled>
        <FlexBoxStyled justifyContent="space-between">
          <Typography color={palette.neutral.medium}>Impressions of your post</Typography>
          <Typography color={palette.neutral.main} fontWeight="500">
            {user.totalLikes}
          </Typography>
        </FlexBoxStyled>
      </Box>

      <Divider />

      <Box p="1rem 0">
        <Typography sx={styles.socialProfileText}>
          Social Profiles
        </Typography>

        <FlexBoxStyled justifyContent="space-between" gap="1rem" mb="0.5rem">
          <FlexBoxStyled justifyContent="space-between" gap="1rem">
            <img src="../assets/twitter.png" alt="twitter" />
            <Box>
              <Typography color={palette.neutral.main} fontWeight="500">
                Twitter
              </Typography>
              <Typography color={palette.neutral.medium}>Social Network</Typography>
            </Box>
          </FlexBoxStyled>
          <EditOutlined sx={{ color: palette.neutral.main }} />
        </FlexBoxStyled>

        <FlexBoxStyled justifyContent="space-between" gap="1rem">
          <FlexBoxStyled justifyContent="space-between" gap="1rem">
            <img src="../assets/linkedin.png" alt="linkedin" />
            <Box>
              <Typography color={palette.neutral.main} fontWeight="500">
                Linkedin
              </Typography>
              <Typography color={palette.neutral.medium}>Network Platform</Typography>
            </Box>
          </FlexBoxStyled>
          <EditOutlined sx={{ color: palette.neutral.main }} />
        </FlexBoxStyled>
      </Box>

    </WidgetWrapper>
  );
};

export default UserWidget;
