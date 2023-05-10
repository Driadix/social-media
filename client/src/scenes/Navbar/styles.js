const getNavbarStyles = (theme) => ({
  mainContainerStyles: {
    padding: '1rem 6%',
    backgroundColor: theme.palette.background.alt,
    justifyContent: 'space-between',
  },
  logoContainerStyles: {
    gap: '1.75rem',
    justifyContent: 'space-between',
  },
  searchContainerStyles: {
    backgroundColor: theme.palette.neutral.light,
    borderRadius: '9px',
    gap: '3rem',
    padding: '0.1rem 1.5rem',
    justifyContent: 'space-between',
  },
  menuDesktopContainerStyles: {
    gap: '2rem',
    justifyContent: 'space-between',
  },
  mobileContainerStyles: {
    position: 'fixed',
    right: '0',
    bottom: '0',
    height: '100%',
    zIndex: '3',
    maxWidth: '500px',
    minWidth: '300px',
    backgroundColor: theme.palette.background.default,
  },
  iconsMobileContainer: {
    p: '1rem',
    justifyContent: 'flex-end',
  },
  menuMobilesContainerStyles: {
    gap: '3rem',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default getNavbarStyles;
