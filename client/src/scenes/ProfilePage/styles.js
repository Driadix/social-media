const getProfilePageStyles = (isNonMobile) => ({
  mainContainer: {
    width: '100%',
    padding: '2rem 6%',
    display: isNonMobile ? 'flex' : 'block',
    gap: '2rem',
    justifyContent: 'center',
  },
  userContainer: {
    flexBasis: isNonMobile ? '26%' : undefined,
  },
  postsContainer: {
    flexBasis: isNonMobile ? '42%' : undefined,
    mt: isNonMobile ? undefined : '2rem',
  },
});

export default getProfilePageStyles;
