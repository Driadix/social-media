const getModalStyles = (palette) => ({
  modalContainer: {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height: 'auto',
    backgroundColor: palette.primary.main,
    border: '2px solid #000',
    padding: '4px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalIcon: {
    width: '40px',
    height: '40px',
    marginRight: '5px',
  },
});

export default getModalStyles;
