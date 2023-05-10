const getMenuItemsStyles = (theme) => ({
  iconsStyles: {
    fontSize: '25px',
  },
  iconsStylesNeutralDark: {
    fontSize: '25px',
    color: theme.palette.neutral.dark,
  },
  selectStyles: {
    backgroundColor: theme.palette.neutral.light,
    width: '150px',
    borderRadius: '0.25rem',
    padding: '0.25rem 1rem',
    '& .MuiSvgIcon-root': {
      pr: '0.25rem',
      width: '3rem',
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: theme.palette.neutral.light,
    },
  },
});

export default getMenuItemsStyles;
