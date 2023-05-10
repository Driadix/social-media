import {
  Select, MenuItem, FormControl, IconButton, Typography, InputBase, useTheme,
} from '@mui/material';
import {
  Message, DarkMode, LightMode, Notifications, Help,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from 'redux/slices/app';
import { setLogout } from 'redux/slices/user';
import getMenuItemsStyles from './styles';

const MenuItems = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const theme = useTheme();
  const styles = getMenuItemsStyles(theme);

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <>
      <IconButton onClick={() => dispatch(changeTheme())}>
        {theme.palette.theme === 'dark' ? <DarkMode sx={styles.iconsStyles} /> : <LightMode sx={styles.iconsStylesNeutralDark} />}
      </IconButton>
      <Message sx={styles.iconsStyles} />
      <Notifications sx={styles.iconsStyles} />
      <Help sx={styles.iconsStyles} />
      <FormControl variant="standard" value={fullName}>
        <Select
          value={fullName}
          sx={styles.selectStyles}
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
