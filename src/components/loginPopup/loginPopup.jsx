import React, { useState } from 'react';
import useEscClose from '../../hooks/useEscClose';
import './loginPopup.css'

function LoginPopup(
  {
    isOpen,
    onClose,
    onLogin
  }
) {


  // Закрытие по Esc
  useEscClose(isOpen, onClose);


  // Стейты формы
  const [isUserName, setIsUserName] = useState('');
  const [isPassword, setIsPassword] = useState('');


  // Установка имени пользователя
  function handleChangeUserName(event) {
    setIsUserName(event.target.value);
  }


  // Установка пароля
  function handleChangePasword(event) {
    setIsPassword(event.target.value);
  }


  function handleSubmit(event) {
    event.preventDefault();
    onLogin(isUserName, isPassword)
      .then(() => {
        setIsUserName('');
        setIsPassword('');
      });
  }


  return (
    <article className={`popup ${isOpen && 'popup_opened'}`}>
      <div onClick={onClose} className="popup__overlay"></div>
      <div className="popup__container popup__container_show_form">
        <h2 className="popup__title">Login</h2>
        <form
          className="popup__form"
          name='loginForm'
          onSubmit={handleSubmit}
        >
          <input
            value={isUserName || ''}
            onChange={handleChangeUserName}
            type="text"
            placeholder="UserName"
            className='popup__field'
            name="username"
            autoComplete="off"
            required
            minLength={2}
          />
          <span className='popup__input-error'></span>
          <input
            value={isPassword || ''}
            onChange={handleChangePasword}
            type="password"
            placeholder="Password"
            className='popup__field'
            name="password"
            autoComplete="off"
            required
            minLength={2}
          />
          <span className='popup__input-error'></span>
          <button
            type="submit"
            aria-label={`Кнопка входа`}
            className='popup__submit-button'
          >
            Login
          </button>
        </form>
        <button
          type="button"
          aria-label="Кнопка закрытия окна"
          className="popup__close-button fade-opacity"
          onClick={onClose}>
        </button>
      </div>

    </article >
  );

}


export default LoginPopup;

