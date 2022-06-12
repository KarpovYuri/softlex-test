// Класс для общения с сервером
class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }


  // Обработка ответа сервера
  _handlingResponse(result) {
    if (result.ok) {
      return result.json();
    } else {
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${result.status}`);
    }
  }


  // Вход пользователя
  loginUser(username, password) {

    let form = new FormData();
    form.append('username', username);
    form.append('password', password);

    return fetch(`${this._baseUrl}/login/?developer=Karpov`, {
      method: 'POST',
      body: form
    })
      .then(res => this._handlingResponse(res));
  }
}


const api = new Api('https://uxcandy.com/~shapoval/test-task-backend/v2');

export default api;
