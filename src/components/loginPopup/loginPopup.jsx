import React from 'react';
import useEscClose from '../../hooks/useEscClose';
import './loginPopup.css'

function LoginPopup(
  {
    isOpen,
    onClose,
    onSubmit,
    inputNameError,
    inputPasswordError
  }
) {


  useEscClose(isOpen, onClose);


  return (
    <article className={`popup ${isOpen && 'popup_opened'}`}>
      <div onClick={onClose} className="popup__overlay"></div>
      <div className="popup__container popup__container_show_form">
        <h2 className="popup__title">Login</h2>
        <form
          className="popup__form"
          onSubmit={onSubmit}
          name='loginForm'
          noValidate
        >
          <input
            type="text"
            placeholder="Имя"
            className='popup__field'
            id="nameInput"
            name="name"
            autoComplete="off"
          />
          <span className='popup__input-error'>
            {inputNameError}
          </span>
          <input
            type="text"
            placeholder="О себе"
            className='popup__field'
            id="aboutInput"
            name="about"
            autoComplete="off"
          />
          <span className='popup__input-error'>
            {inputPasswordError}
          </span>
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

