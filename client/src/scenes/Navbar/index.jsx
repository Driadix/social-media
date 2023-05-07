import React from 'react';
import {
  Box, IconButton, InputBase, useTheme, useMediaQuery,
} from '@mui/material';
import {
  Search, Menu, Close,
} from '@mui/icons-material';
import MenuItems from 'scenes/Navbar/MenuItems';
import FlexBoxStyled from 'components/FlexBoxStyled';
import MainLogo from 'components/MainLogo';

const Navbar = () => {
  const [isMobileMenuOpened, setisMobileMenuOpened] = React.useState(false);
  const isNotMobile = useMediaQuery('(min-width: 1000px)');

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const background = theme.palette.background.default;
  const backgroundAlt = theme.palette.background.alt;

  return (
    <FlexBoxStyled padding="1rem 6%" backgroundColor={backgroundAlt} justifyContent="space-between">
      <FlexBoxStyled gap="1.75rem" justifyContent="space-between">
        <MainLogo />
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
          <MenuItems />
        </FlexBoxStyled>

      ) : (
        <IconButton onClick={() => setisMobileMenuOpened(!isMobileMenuOpened)}>
          <Menu />
        </IconButton>
      )}

      {!isNotMobile && isMobileMenuOpened && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="3"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          <FlexBoxStyled p="1rem" justifyContent="flex-end">
            <IconButton onClick={() => setisMobileMenuOpened(!isMobileMenuOpened)}>
              <Close />
            </IconButton>
          </FlexBoxStyled>

          <FlexBoxStyled gap="3rem" flexDirection="column" justifyContent="center">
            <MenuItems />
          </FlexBoxStyled>

        </Box>
      )}
    </FlexBoxStyled>
  );
};

export default Navbar;
