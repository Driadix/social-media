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
import getNavbarStyles from './styles';

const Navbar = () => {
  const [isMobileMenuOpened, setisMobileMenuOpened] = React.useState(false);
  const isNotMobile = useMediaQuery('(min-width: 1000px)');

  const theme = useTheme();

  const styles = getNavbarStyles(theme);

  return (
    <FlexBoxStyled sx={styles.mainContainer}>
      <FlexBoxStyled sx={styles.logoContainer}>
        <MainLogo />
        {isNotMobile && (
        <FlexBoxStyled sx={styles.searchContainer}>
          <InputBase placeholder="Search" />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBoxStyled>
        )}
      </FlexBoxStyled>

      {isNotMobile ? (
        <FlexBoxStyled sx={styles.menuDesktopContainer}>
          <MenuItems />
        </FlexBoxStyled>

      ) : (
        <IconButton onClick={() => setisMobileMenuOpened(!isMobileMenuOpened)}>
          <Menu />
        </IconButton>
      )}

      {!isNotMobile && isMobileMenuOpened && (
        <Box sx={styles.mobileContainer}>
          <FlexBoxStyled sx={styles.iconsMobileContainer}>
            <IconButton onClick={() => setisMobileMenuOpened(!isMobileMenuOpened)}>
              <Close />
            </IconButton>
          </FlexBoxStyled>

          <FlexBoxStyled sx={styles.menuMobilesContainer}>
            <MenuItems />
          </FlexBoxStyled>

        </Box>
      )}
    </FlexBoxStyled>
  );
};

export default Navbar;
