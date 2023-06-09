const getFormStyles = (palette, isNonMobile) => ({
  formContainer: {
    display: 'grid',
    gap: '30px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    '& > div:nth-of-type(1), & > div:nth-of-type(2)': {
      gridColumn: isNonMobile ? 'span 1' : 'span 2',
    },
    '& > div:not(:nth-of-type(1)):not(:nth-of-type(2))': {
      gridColumn: 'span 2',
    },
  },
  formContainerLogin: {
    display: 'grid',
    gap: '30px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    '& > div': {
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
    color: palette.neutral.dark,
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
