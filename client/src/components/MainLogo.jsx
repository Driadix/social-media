import { useNavigate } from 'react-router-dom';
import { useTheme, Typography } from '@mui/material';

const MainLogo = ({ isClickable = true, fontSize = 'clamp(1rem, 2rem, 2.25rem)' }) => {
  const navigate = useNavigate();

  const theme = useTheme();
  const primaryLight = theme.palette.primary.light;
  return (
    isClickable ? (
      <Typography
        fontWeight="bold"
        fontSize={fontSize}
        color="primary"
        onClick={() => navigate('/')}
        sx={{
          '&:hover': {
            color: primaryLight,
            cursor: 'pointer',
          },
        }}
      >
        OnMedia
      </Typography>
    ) : (
      <Typography
        fontWeight="bold"
        fontSize={fontSize}
        color="primary"
      >
        OnMedia
      </Typography>
    )
  );
};

export default MainLogo;
