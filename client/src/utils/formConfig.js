import * as yup from 'yup';

export const loginInitialValues = {
  email: '',
  password: '',
};

export const registerInitialValues = {
  firstName: '',
  lastName: '',
  address: '',
  job: '',
  picture: '',
  email: '',
  password: '',
};

export const loginSchema = yup.object().shape({
  email: yup.string().email('Неправильный email').required('Необходимо заполнить поле'),
  password: yup.string().required('Необходимо заполнить поле'),
});

export const registerSchema = yup.object().shape({
  firstName: yup.string().required('Необходимо заполнить поле'),
  lastName: yup.string().required('Необходимо заполнить поле'),
  address: yup.string().required('Необходимо заполнить поле'),
  job: yup.string().required('Необходимо заполнить поле'),
  picture: yup.string().required('Необходимо заполнить поле'),
  email: yup.string().email('Неправильный email').required('Необходимо заполнить поле'),
  password: yup.string().required('Необходимо заполнить поле'),
});
