import React, { useState, useEffect } from 'react';
import { api } from '../services/api';

export default function Catalog() {
  const [tires, setTires] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  // 1. GET - Загрузка данных
  useEffect(() => {
    fetchTires();
  }, []);

  const fetchTires = async () => {
    try {
      setLoading(true);
      const res = await api.getTires();
      // Имитируем, что пришедшие "посты" — это наши шины
      setTires(res.data);
    } catch (err) {
      setError('Ошибка при загрузке данных');
    } finally {
      setLoading(false);
    }
  };

  // 2. POST - Добавление
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await api.createTire({ title: newTitle, body: 'Sibirea Tech', userId: 1 });
      setTires([res.data, ...tires]); // Добавляем в начало списка
      setNewTitle('');
    } catch (err) {
      alert('Не удалось добавить запись');
    }
  };

  // 3. DELETE - Удаление
  const handleDelete = async (id) => {
    try {
      await api.deleteTire(id);
      setTires(tires.filter(t => t.id !== id));
    } catch (err) {
      alert('Ошибка при удалении');
    }
  };

  // 4. PUT - Редактирование (упрощенно)
  const handleUpdate = async (id) => {
    const updatedTitle = prompt('Введите новое название:');
    if (!updatedTitle) return;
    try {
      const res = await api.updateTire(id, { title: updatedTitle });
      setTires(tires.map(t => t.id === id ? { ...t, title: res.data.title } : t));
    } catch (err) {
      alert('Ошибка при обновлении');
    }
  };

  if (loading) return <div style={{padding: '50px', textAlign: 'center'}}>ЗАГРУЗКА SIBIREA TIRES...</div>;
  if (error) return <div style={{color: 'red', textAlign: 'center'}}>{error}</div>;

  return (
    <div className="info-page">
      <h2 style={{textTransform: 'uppercase', marginBottom: '20px'}}>Управление каталогом (API Lab)</h2>

      {/* Форма POST запроса */}
      <form onSubmit={handleAdd} style={{marginBottom: '40px', display: 'flex', gap: '10px'}}>
        <input 
          type="text" 
          placeholder="Название новой модели" 
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={{flex: 1, padding: '10px'}}
          required
        />
        <button type="submit" className="btn">Добавить</button>
      </form>

      <div className="grid">
        {tires.map(tire => (
          <div className="card" key={tire.id}>
            <div className="card-content">
              <h3 style={{fontSize: '14px'}}>{tire.title.toUpperCase()}</h3>
              <p style={{color: '#888', marginBottom: '15px'}}>ID: {tire.id}</p>
              
              <div style={{display: 'flex', gap: '10px'}}>
                <button onClick={() => handleUpdate(tire.id)} className="btn" style={{padding: '5px 10px', background: '#333', fontSize: '12px'}}>Ред.</button>
                <button onClick={() => handleDelete(tire.id)} className="btn" style={{padding: '5px 10px', fontSize: '12px'}}>Удалить</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}