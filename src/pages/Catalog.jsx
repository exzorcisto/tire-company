import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// Проверь, чтобы путь соответствовал папке hooks в твоем src
import { useTiresQuery } from '../hooks/useTiresQuery';
// Импорт экшена из слайса корзины
import { addToCart } from '../store/slices/cartSlice';

export default function Catalog() {
  const [newTitle, setNewTitle] = useState('');
  const dispatch = useDispatch();

  // ИСПРАВЛЕНО: Добавлен addMutation в деструктуризацию (строка 11 на твоем скриншоте)
  const { tiresQuery, deleteMutation, addMutation } = useTiresQuery();

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    // Вызываем мутацию для добавления в базу (React Query)
    addMutation.mutate({ title: newTitle, body: 'Sibirea Tech' });
    setNewTitle('');
  };

  const handleAddToCart = (tire) => {
    // Отправляем данные в глобальное состояние (Redux)
    dispatch(addToCart({
      id: tire.id,
      title: tire.title,
      price: Math.floor(Math.random() * 50000) + 20000
    }));
  };

  // Обработка состояний загрузки
  if (tiresQuery.isLoading) return <div style={{padding: '100px', textAlign: 'center'}}>ЗАГРУЗКА...</div>;

  return (
    <div className="info-page">
      <h2 style={{textTransform: 'uppercase', marginBottom: '20px', borderLeft: '5px solid var(--brand-red)', paddingLeft: '15px'}}>
        Продукция Sibirea Tires
      </h2>

      {/* Форма добавления новой шины */}
      <form onSubmit={handleAdd} style={{marginBottom: '30px', display: 'flex', gap: '10px'}}>
        <input 
          type="text" 
          placeholder="Название новой модели" 
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={{flex: 1, padding: '12px', background: '#f4f4f4', border: '1px solid #ddd'}}
          required
        />
        <button type="submit" className="btn" disabled={addMutation.isLoading}>
          {addMutation.isLoading ? '...' : 'ДОБАВИТЬ'}
        </button>
      </form>

      <div className="grid">
        {tiresQuery.data?.map((tire) => (
          <div className="card" key={tire.id}>
            <div className="card-content">
              <h3 style={{fontSize: '14px', minHeight: '3em'}}>
                {tire.title ? tire.title.toUpperCase() : 'БЕЗ НАЗВАНИЯ'}
              </h3>
              <p style={{color: 'var(--brand-red)', fontWeight: 'bold', marginBottom: '15px'}}>В наличии</p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <button 
                  onClick={() => handleAddToCart(tire)} 
                  className="btn" 
                  style={{background: '#111'}}
                >
                  В ЗАЯВКУ
                </button>
                
                <button 
                  onClick={() => deleteMutation.mutate(tire.id)} 
                  className="btn" 
                  style={{background: 'transparent', color: '#666', border: '1px solid #ccc', fontSize: '10px'}}
                  disabled={deleteMutation.isLoading}
                >
                  {deleteMutation.isLoading ? 'УДАЛЕНИЕ...' : 'УДАЛИТЬ ИЗ БАЗЫ'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}