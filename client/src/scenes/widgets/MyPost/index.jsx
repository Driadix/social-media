import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from '@mui/icons-material';
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import FlexBoxStyled from 'components/FlexBoxStyled';
import Dropzone from 'react-dropzone';
import UserImage from 'components/UserImage';
import WidgetWrapper from 'components/WidgetWrapper';
import { setPosts } from 'redux/slices/post';
import { BASE_URL } from 'utils/api';
import getMyPostStyles from './styles';

const MyPostWidget = ({ imageLink }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [post, setPost] = React.useState('');

  const { token } = useSelector((state) => state.user);
  const { _id } = useSelector((state) => state.user.user);

  const { palette } = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  const styles = getMyPostStyles(palette, isNonMobileScreens);

  const handlePost = async () => {
    const formData = new FormData();
    formData.append('owner', _id);
    formData.append('description', post);
    if (image) {
      formData.append('postImage', image.name);
      formData.append('picture', image);
    }

    fetch(
      `${BASE_URL}/posts`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      },
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((res) => {
        if (!res) Promise.reject(res);
        dispatch(setPosts({ res }));
        setImage(null);
        setPost('');
      })
      .catch((error) => {
        console.log('API: ', error);
      });
  };

  return (
    <WidgetWrapper>
      <FlexBoxStyled justifyContent="space-between" gap="1.5rem">
        <UserImage image={imageLink} />
        <InputBase
          placeholder="Расскажите о своём..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={styles.tellAboutInput}
        />
      </FlexBoxStyled>
      {isImage && (
      <Box
        sx={styles.addImageContainer}
      >
        <Dropzone
          acceptedFiles=".jpg,.jpeg,.png"
          multiple={false}
          onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
        >
          {({ getRootProps, getInputProps }) => (
            <FlexBoxStyled justifyContent="space-between">
              <Box
              // eslint-disable-next-line react/jsx-props-no-spreading
                {...getRootProps()}
                sx={styles.addImageInnerContainer}
              >
                <input
                // eslint-disable-next-line react/jsx-props-no-spreading
                  {...getInputProps()}
                />
                {!image ? (
                  <p>Add Image Here</p>
                ) : (
                  <FlexBoxStyled justifyContent="space-between">
                    <Typography>{image.name}</Typography>
                    <EditOutlined />
                  </FlexBoxStyled>
                )}
              </Box>
              {image && (
              <IconButton
                onClick={() => setImage(null)}
                sx={{ width: '15%' }}
              >
                <DeleteOutlined />
              </IconButton>
              )}
            </FlexBoxStyled>
          )}
        </Dropzone>
      </Box>
      )}

      <Divider sx={{ margin: '1.25rem 0' }} />

      <FlexBoxStyled justifyContent="space-between">
        <FlexBoxStyled justifyContent="space-between" gap="0.25rem" onClick={() => setIsImage(!isImage)}>
          <ImageOutlined sx={{ color: palette.neutral.mediumMain }} />
          <Typography
            sx={styles.imageSign}
          >
            Image
          </Typography>
        </FlexBoxStyled>

        {isNonMobileScreens ? (
          <>
            <FlexBoxStyled justifyContent="space-between" gap="0.25rem">
              <GifBoxOutlined sx={{ color: palette.neutral.mediumMain }} />
              <Typography color={palette.neutral.mediumMain}>Clip</Typography>
            </FlexBoxStyled>

            <FlexBoxStyled justifyContent="space-between" gap="0.25rem">
              <AttachFileOutlined sx={{ color: palette.neutral.mediumMain }} />
              <Typography color={palette.neutral.mediumMain}>Attachment</Typography>
            </FlexBoxStyled>

            <FlexBoxStyled justifyContent="space-between" gap="0.25rem">
              <MicOutlined sx={{ color: palette.neutral.mediumMain }} />
              <Typography color={palette.neutral.mediumMain}>Audio</Typography>
            </FlexBoxStyled>
          </>
        ) : (
          <FlexBoxStyled justifyContent="space-between" gap="0.25rem">
            <MoreHorizOutlined sx={{ color: palette.neutral.mediumMain }} />
          </FlexBoxStyled>
        )}

        <Button
          disabled={!post}
          onClick={handlePost}
          sx={styles.handlePostButton}
        >
          POST
        </Button>
      </FlexBoxStyled>
    </WidgetWrapper>
  );
};

export default MyPostWidget;
