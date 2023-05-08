import { Formik } from 'formik';
import {
  Box, Button, TextField, Typography,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Dropzone from 'react-dropzone';

import FlexBoxStyled from 'components/FlexBoxStyled';
import {
  registerInitialValues, registerSchema,
} from 'utils/formConfig';

const RegisterForm = ({ styles, setIsLoginPage, handleFormSubmit }) => (
  <Formik
    onSubmit={handleFormSubmit}
    initialValues={registerInitialValues}
    validationSchema={registerSchema}
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
            Зарегистрироваться
          </Button>
          <Typography
            onClick={() => {
              resetForm();
              setIsLoginPage(true);
            }}
            sx={styles.changePageButton}
          >
            Уже есть аккаунт? Войдите здесь!
          </Typography>
        </Box>
      </form>
    )}
  </Formik>
);

export default RegisterForm;
