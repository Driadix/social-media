const getFriendStyles = (palette) => ({
  nameText: {
    color: palette.neutral.main,
    fontWeight: '500',
    '&:hover': {
      color: palette.primary.light,
      cursor: 'pointer',
    },
  },
  subtitleText: {
    color: palette.neutral.medium,
    fontSize: '0.75rem',
  },
  updateButton: {
    backgroundColor: palette.primary.light,
    p: '0.6rem',
  },
});

export default getFriendStyles;
