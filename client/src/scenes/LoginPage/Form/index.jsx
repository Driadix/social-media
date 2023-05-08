import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setLogin } from 'redux/slices/user';
import { BASE_URL, LOGIN, REGISTER } from 'utils/api';

import LoginForm from 'components/LoginForm';
import RegisterForm from 'components/RegisterForm';
import InfoModal from 'components/InfoModal';
import getFormStyles from './styles';

const Form = () => {
  const [isLoginPage, setIsLoginPage] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const [modalData, setModalData] = React.useState({
    modalText: '',
    isError: false,
  });

  const handleModal = (data) => {
    setOpenModal(true);
    setModalData(data);
  };

  const { palette } = useTheme();
  const isNotMobile = useMediaQuery('(min-width: 600px)');
  const styles = getFormStyles(palette, isNotMobile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = (values, onSubmitProps) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => formData.append(key, values[key]));
    formData.append('imageLink', values.picture.name);

    fetch(
      `${BASE_URL}${REGISTER}`,
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((res) => {
        handleModal({
          modalText: 'Регистрация прошла успешно!',
          isError: false,
        });
        setIsLoginPage(true);
      })
      .catch((error) => {
        handleModal({
          modalText: 'Произошла ошибка при регистрации',
          isError: true,
        });
        console.log('API: ', error);
      })
      .finally(() => onSubmitProps.resetForm());
  };

  const login = (values, onSubmitProps) => {
    fetch(
      `${BASE_URL}${LOGIN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      },
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((res) => {
        if (!res) { Promise.reject(res); }
        dispatch(setLogin({
          user: res.user,
          token: res.token,
        }));
        navigate('/');
      })
      .catch((error) => {
        handleModal({
          modalText: 'Произошла ошибка при входе',
          isError: true,
        });
        console.log('API: ', error);
      })
      .finally(() => onSubmitProps.resetForm());
  };

  const handleLoginFormSubmit = async (values, onSubmitProps) => {
    await login(values, onSubmitProps);
  };

  const handleRegisterFormSubmit = async (values, onSubmitProps) => {
    await register(values, onSubmitProps);
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isLoginPage ? (
        <LoginForm
          styles={styles}
          setIsLoginPage={setIsLoginPage}
          handleFormSubmit={handleLoginFormSubmit}
        />
      ) : (
        <RegisterForm
          styles={styles}
          setIsLoginPage={setIsLoginPage}
          handleFormSubmit={handleRegisterFormSubmit}
        />
      )}
      <InfoModal modalData={modalData} openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Form;
