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


  // Получение задач с сервера
  getInitialTasks(page, { sort_field, sort_direction }) {
    return fetch(`${this._baseUrl}/?developer=Example&page=${page + 1}&sort_field=${sort_field}&sort_direction=${sort_direction}`, {
      method: 'GET'
    })
      .then(res => this._handlingResponse(res));
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


  // Редактирование задачи на сервере
  editTask({ id, text, status }) {


    let form = new FormData();
    form.append('token', localStorage.getItem('jwt'));
    form.append('text', text);
    form.append('status', status);

    return fetch(`${this._baseUrl}/edit/${id}:id/?developer=Example`, {
      method: 'POST',
      body: form
    })
      .then(res => this._handlingResponse(res));
  }


}

const api = new Api('https://uxcandy.com/~shapoval/test-task-backend/v2');

export default api;
