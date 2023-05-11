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
        {theme.palette.theme === 'dark' ? <DarkMode sx={styles.icons} /> : <LightMode sx={styles.iconsNeutralDark} />}
      </IconButton>
      <Message sx={styles.icons} />
      <Notifications sx={styles.icons} />
      <Help sx={styles.icons} />
      <FormControl variant="standard" value={fullName}>
        <Select
          value={fullName}
          sx={styles.select}
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
