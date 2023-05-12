import { Formik } from 'formik';
import {
  Box, Button, TextField, Typography,
} from '@mui/material';

import { loginInitialValues, loginSchema } from 'utils/formConfig';

const LoginForm = ({ styles, setIsLoginPage, handleFormSubmit }) => (
  <Formik
    onSubmit={handleFormSubmit}
    initialValues={loginInitialValues}
    validationSchema={loginSchema}
  >
    {({
      values,
      errors,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
      resetForm,
    }) => (
      <form onSubmit={handleSubmit}>
        <Box sx={styles.formContainerLogin}>
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
            Login
          </Button>
          <Typography
            onClick={() => {
              resetForm();
              setIsLoginPage(false);
            }}
            sx={styles.changePageButton}
          >
            Doesnt have account yet? Register here!
          </Typography>
        </Box>
      </form>
    )}
  </Formik>
);

export default LoginForm;
