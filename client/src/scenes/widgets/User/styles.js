const getUserWidgetStyles = (palette) => ({
  headerContainer: {
    justifyContent: 'space-between',
    gap: '0.5rem',
    pb: '1.1rem',
  },
  headerName: {
    color: palette.neutral.dark,
    fontWeight: '500',
    '&:hover': {
      color: palette.primary.light,
      cursor: 'pointer',
    },
  },
  addressContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    mb: '0.5rem',
  },
  jobContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  socialProfileText: {
    fontSize: '1rem',
    color: palette.neutral.main,
    fontWeight: '500',
    mb: '1rem',
  },

});

export default getUserWidgetStyles;
