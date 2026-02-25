import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const api = {
  // GET: Получение списка
  getTires: () => axios.get(`${API_URL}?_limit=8`),
  
  // POST: Создание новой записи
  createTire: (data) => axios.post(API_URL, data),
  
  // PUT: Обновление
  updateTire: (id, data) => axios.put(`${API_URL}/${id}`, data),
  
  // DELETE: Удаление
  deleteTire: (id) => axios.delete(`${API_URL}/${id}`)
};