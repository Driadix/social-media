const getFormStyles = (palette, isNonMobile) => ({
  formContainer: {
    display: 'grid',
    gap: '30px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    '& > div:nth-child(1), & > div:nth-child(2)': {
      gridColumn: isNonMobile ? 'span 1' : 'span 2',
    },
    '& > div:not(:first-child):not(:nth-child(2))': {
      gridColumn: 'span 2',
    },
  },
  dropZoneContainer: {
    gridColumn: 'span 4',
    border: `1px solid ${palette.neutral.medium}`,
    borderRadius: '5px',
    p: '1rem',
  },
  dropZoneInner: {
    border: `2px dashed ${palette.primary.main}`,
    padding: '1rem',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  submitButton: {
    m: '2rem 0',
    p: '1rem',
    backgroundColor: palette.primary.main,
    color: palette.background.alt,
    '&:hover': { color: palette.primary.main },
  },
  changePageButton: {
    textDecoration: 'underline',
    color: palette.primary.main,
    '&:hover': {
      cursor: 'pointer',
      color: palette.primary.light,
    },
  },
});

export default getFormStyles;
