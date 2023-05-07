import React from 'react';
import {
  Box, IconButton, InputBase, Typography, Select, MenuItem, FormControl, useTheme, useMediaQuery,
} from '@mui/material';
import {
  Search, Message, DarkMode, LightMode, Notifications, Help, Menu, Close,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from 'redux/slices/app';
import { setLogout } from 'redux/slices/user';
import { useNavigate } from 'react-router-dom';
import FlexBoxStyled from '../../components/FlexBoxStyled';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMobileMenuOpened, setisMobileMenuOpened] = React.useState(false);
  const isNotMobile = useMediaQuery('(min-width: 1000px)');
  const user = useSelector((state) => state.user);

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const neutraldark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const { alt } = theme.palette.background;
  const primaryLight = theme.palette.primary.light;

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <FlexBoxStyled padding="1rem 6%" backgroundColor={alt} justifyContent="space-between">
      <FlexBoxStyled gap="1.75rem" justifyContent="space-between">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate('/')}
          sx={{
            '&:hover': {
              color: primaryLight,
              cursor: 'pointer',
            },
          }}
        >
          Sociall
        </Typography>
        {isNotMobile && (
        <FlexBoxStyled backgroundColor={neutralLight} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem" justifyContent="space-between">
          <InputBase placeholder="Search" />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBoxStyled>
        )}
      </FlexBoxStyled>

      {isNotMobile ? (
        <FlexBoxStyled gap="2rem" justifyContent="space-between">
          <IconButton onClick={() => dispatch(changeTheme())}>
            {theme.palette.theme === 'dark' ? <DarkMode sx={{ fontSize: '25px' }} /> : <LightMode sx={{ color: neutraldark, fontSize: '25px' }} />}
          </IconButton>
          <Message sx={{ fontSize: '25px' }} />
          <Notifications sx={{ fontSize: '25px' }} />
          <Help sx={{ fontSize: '25px' }} />
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: '150px',
                borderRadius: '0.25rem',
                padding: '0.25rem 1rem',
                '& .MuiSvgIcon-root': {
                  pr: '0.25rem',
                  width: '3rem',
                },
                '& .MuiSelect-select:focus': {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Logout</MenuItem>
            </Select>
          </FormControl>
        </FlexBoxStyled>

      ) : (
        <IconButton />
      )}
    </FlexBoxStyled>
  );
};
