import {
  Select, MenuItem, FormControl, IconButton, Typography, InputBase, useTheme,
} from '@mui/material';
import {
  Message, DarkMode, LightMode, Notifications, Help,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from 'redux/slices/app';
import { setLogout } from 'redux/slices/user';

const MenuItems = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const theme = useTheme();
  const neutraldark = theme.palette.neutral.dark;
  const neutralLight = theme.palette.neutral.light;

  const fullName = `${user.firstName} ${user.lastName}`;
  return (
    <>
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
    </>
  );
};

export default MenuItems;
