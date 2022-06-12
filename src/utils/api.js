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

    return fetch(`${this._baseUrl}/login/?developer=Example`, {
      method: 'POST',
      body: form
    })
      .then(res => this._handlingResponse(res));
  }


  // Добавление задачи
  addTask({ username, email, text }) {

    let form = new FormData();
    form.append('username', username);
    form.append('email', email);
    form.append('text', text);

    return fetch(`${this._baseUrl}/create/?developer=Example`, {
      method: 'POST',
      body: form
    })
      .then(res => this._handlingResponse(res));
  }


  // Получение задач с сервера
  getInitialTasks() {
    return fetch(`${this._baseUrl}/?developer=Example`, {
      method: 'GET'
    })
      .then(res => this._handlingResponse(res));
  }


  // Редактирование задачи на сервере
  editTask() {

    let form = new FormData();
    form.append('id', '497');
    form.append('token', localStorage.getItem('jwt'));

    return fetch(`${this._baseUrl}/edit/?developer=Example`, {
      method: 'POST',
      body: form
    })
      .then(res => this._handlingResponse(res));
  }


}

const api = new Api('https://uxcandy.com/~shapoval/test-task-backend/v2');

export default api;
