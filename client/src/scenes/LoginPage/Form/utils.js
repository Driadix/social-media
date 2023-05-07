import * as yup from 'yup';

export const loginInitialValues = {
  email: '',
  password: '',
};

export const registerInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  imageLink: '',
  address: '',
  job: '',
};

export const loginSchema = yup.object().shape({
  email: yup.string().email('Неправильный email').required('Необходимо заполнить поле'),
  password: yup.string().required('Необходимо заполнить поле'),
});

export const registerSchema = yup.object().shape({
  firstName: yup.string().required('Необходимо заполнить поле'),
  lastName: yup.string().required('Необходимо заполнить поле'),
  email: yup.string().email('Неправильный email').required('Необходимо заполнить поле'),
  password: yup.string().required('Необходимо заполнить поле'),
  imageLink: yup.string().required('Необходимо заполнить поле'),
  address: yup.string().required('Необходимо заполнить поле'),
  job: yup.string().required('Необходимо заполнить поле'),
});
