import React from 'react';
import {
  Box, Button, TextField, Typography, useTheme, useMediaQuery,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Dropzone from 'react-dropzone';

import { setLogin } from 'redux/slices/user';
import FlexBoxStyled from 'components/FlexBoxStyled';
import {
  loginInitialValues, registerInitialValues, loginSchema, registerSchema,
} from 'scenes/LoginPage/Form/utils';
import getFormStyles from './styles';

const Form = () => {
  const [isLoginPage, setIsLoginPage] = React.useState(false);
  const { palette } = useTheme();
  const isNotMobile = useMediaQuery('(min-width: 600px)');
  const styles = getFormStyles(palette, isNotMobile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = () => {
    // register function
  };

  const login = () => {
    // login function
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLoginPage) await login(values, onSubmitProps);
    if (!isLoginPage) await register(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLoginPage ? loginInitialValues : registerInitialValues}
      validationSchema={isLoginPage ? loginSchema : registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box sx={styles.formContainer}>
            {!isLoginPage && (
              <>
                <TextField
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
                <TextField
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
                <TextField
                  label="Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                  name="address"
                  error={Boolean(touched.address) && Boolean(errors.address)}
                  helperText={touched.address && errors.address}
                />
                <TextField
                  label="Job"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.job}
                  name="job"
                  error={Boolean(touched.job) && Boolean(errors.job)}
                  helperText={touched.job && errors.job}
                />
                <Box sx={styles.dropZoneContainer}>
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) => setFieldValue('picture', acceptedFiles[0])}
                  >
                    {({ getRootProps, getInputProps }) => (

                      <Box
                      // eslint-disable-next-line react/jsx-props-no-spreading
                        {...getRootProps()}
                        sx={styles.dropZoneInner}
                      >

                        <input
                        // eslint-disable-next-line react/jsx-props-no-spreading
                          {...getInputProps()}
                        />
                        {!values.picture ? (
                          <p>Add your profile picture here</p>
                        ) : (
                          <FlexBoxStyled justifyContent="space-between">
                            <Typography>{values.picture.name}</Typography>
                            <EditOutlinedIcon />
                          </FlexBoxStyled>
                        )}
                      </Box>
                    )}
                  </Dropzone>
                </Box>
              </>
            )}
            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
          </Box>

          <Box>
            <Button
              fullWidth
              type="submit"
              sx={styles.submitButton}
            >
              {isLoginPage ? 'Войти' : 'Зарегистрироваться'}
            </Button>
            <Typography
              onClick={() => {
                setIsLoginPage(!isLoginPage);
                resetForm();
              }}
              sx={styles.changePageButton}
            >
              {isLoginPage
                ? 'Ещё нет аккаунта? Зарегистрируйтесь здесь!'
                : 'Уже есть аккаунт? Войдите здесь!'}
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
