const getLoginPageStyles = (palette, isNotMobile) => ({
  loginHeader: {
    width: '100%',
    backgroundColor: palette.background.alt,
    padding: '1rem 6%',
    textAlign: 'center',
  },
  form: {
    width: isNotMobile ? '50%' : '93%',
    padding: '2rem',
    margin: '2rem auto',
    borderRadius: '1.5rem',
    backgroundColor: palette.background.alt,
  },
  title: {
    fontWeight: '500',
    marginBottom: '1.5rem',
    color: palette.neutral.mediumMain,
  },
});

export default getLoginPageStyles;
