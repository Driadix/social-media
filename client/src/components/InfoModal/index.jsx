import {
  Modal, Typography, Box, useTheme, useMediaQuery,
} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import getModalStyles from './styles';

const InfoModal = ({ modalData, openModal, setOpenModal }) => {
  const { palette } = useTheme();
  const isNotMobile = useMediaQuery('(min-width: 600px)');
  const styles = getModalStyles(palette, isNotMobile);

  const handleModalClose = () => setOpenModal(false);

  return (
    <Modal open={openModal} onClose={handleModalClose}>
      <Box sx={styles.modalContainer}>
        {modalData.isError ? (
          <ErrorIcon sx={styles.modalIcon} />
        ) : (
          <CheckCircleIcon sx={styles.modalIcon} />
        )}
        <Typography variant="h6">
          {modalData.modalText}
        </Typography>
      </Box>
    </Modal>
  );
};

export default InfoModal;
