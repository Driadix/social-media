import {
  Box, Typography, useTheme, useMediaQuery,
} from '@mui/material';
import MainLogo from 'components/MainLogo';
import Form from './Form';
import getLoginPageStyles from './styles';

const LoginPage = () => {
  const { palette } = useTheme();
  const isNotMobile = useMediaQuery('(min-width: 1000px)');
  const styles = getLoginPageStyles(palette, isNotMobile);

  return (
    <Box>

      <Box sx={styles.loginHeader}>
        <MainLogo isClickable={false} fontSize="32px" />
      </Box>

      <Box sx={styles.form}>
        <Typography variant="h5" sx={styles.title}>
          Welcome to OnMedia, stay on the same Media!
        </Typography>
        <Form />
      </Box>

    </Box>
  );
};
export default LoginPage;
