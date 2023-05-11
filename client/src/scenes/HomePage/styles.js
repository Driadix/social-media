const getHomePageStyles = (isNonMobile) => ({
  widgetsContainer: {
    width: '100%',
    padding: '2rem 6%',
    display: isNonMobile ? 'flex' : 'block',
    gap: '0.5rem',
    justifyContent: 'space-between',
  },
  userWidgetContainer: {
    flexBasis: isNonMobile ? '26%' : undefined,
  },
  postsWidgetContainer: {
    flexBasis: isNonMobile ? '42%' : undefined,
    mt: isNonMobile ? undefined : '2rem',
  },
});

export default getHomePageStyles;
