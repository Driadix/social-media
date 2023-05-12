import { Typography, useTheme } from '@mui/material';
import FlexBoxStyled from 'components/FlexBoxStyled';
import WidgetWrapper from 'components/WidgetWrapper';

const AdvertWidget = () => {
  const { palette } = useTheme();

  return (
    <WidgetWrapper>
      <FlexBoxStyled justifyContent="space-between">
        <Typography color={palette.neutral.dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={palette.neutral.medium}>Create Ad</Typography>
      </FlexBoxStyled>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: '0.75rem', margin: '0.75rem 0' }}
      />
      <FlexBoxStyled justifyContent="space-between">
        <Typography color={palette.neutral.main}>MikaCosmetics</Typography>
        <Typography color={palette.neutral.medium}>mikacosmetics.com</Typography>
      </FlexBoxStyled>
      <Typography color={palette.neutral.medium} m="0.5rem 0">
        Your pathway to stunning and immaculate beauty and made sure your skin
        is exfoliating skin and shining like light.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
