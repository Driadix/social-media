const getMyPostStyles = (palette) => ({
  tellAboutInput: {
    width: '100%',
    backgroundColor: palette.neutral.light,
    borderRadius: '2rem',
    padding: '1rem 2rem',
  },
  addImageContainer: {
    border: `1px solid ${palette.neutral.medium}`,
    borderRadius: '5px',
    mt: '1rem',
    p: '1rem',
  },
  addImageInnerContainer: {
    border: `2px dashed ${palette.primary.main}`,
    p: '1rem',
    width: '100%',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  imageSign: {
    color: palette.neutral.mediumMain,
    '&:hover': {
      cursor: 'pointer', color: palette.neutral.medium,
    },
  },
  handlePostButton: {
    color: palette.background.alt,
    backgroundColor: palette.primary.main,
    borderRadius: '3rem',
  },
});

export default getMyPostStyles;
