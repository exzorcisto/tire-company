import React, { useState } from 'react';
import { useTiresQuery } from '../hooks/useTiresQuery';

export default function Catalog() {
  const [newTitle, setNewTitle] = useState('');
  const { tiresQuery, deleteMutation, addMutation, updateMutation } = useTiresQuery();

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    // Отправляем объект с полем title
    addMutation.mutate({ title: newTitle, body: 'Sibirea Tires Tech' });
    setNewTitle('');
  };

  const handleEdit = (tire) => {
    const newText = prompt('Новое название модели:', tire.title);
    if (newText && newText !== tire.title) {
      // Важно: передаем id и объект data отдельно, как ожидает наш хук
      updateMutation.mutate({ 
        id: tire.id, 
        data: { title: newText } 
      });
    }
  };

  if (tiresQuery.isLoading) return <div style={{textAlign: 'center', padding: '50px'}}>ЗАГРУЗКА...</div>;

  return (
    <div className="info-page" style={{paddingBottom: '100px'}}>
      <h2>Каталог Sibirea (React Query)</h2>

      <form onSubmit={handleAdd} style={{margin: '20px 0', display: 'flex', gap: '10px'}}>
        <input 
          type="text" 
          placeholder="Название шины" 
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={{padding: '10px', flex: 1, border: '1px solid #ccc'}}
        />
        <button type="submit" className="btn" disabled={addMutation.isLoading}>
          {addMutation.isLoading ? '...' : 'ДОБАВИТЬ'}
        </button>
      </form>

      <div className="grid">
        {tiresQuery.data?.map((tire) => (
          <div className="card" key={tire.id} style={{border: '1px solid #eee', padding: '15px'}}>
            <div className="card-content">
              <h3 style={{fontSize: '14px', minHeight: '3em'}}>
                {tire.title ? tire.title.toUpperCase() : 'БЕЗ НАЗВАНИЯ'}
              </h3>
              
              <div style={{display: 'flex', gap: '10px', marginTop: '15px'}}>
                <button 
                  onClick={() => handleEdit(tire)} 
                  className="btn" 
                  style={{background: '#333', fontSize: '10px', flex: 1}}
                >
                  ИЗМЕНИТЬ
                </button>
                <button 
                  onClick={() => deleteMutation.mutate(tire.id)} 
                  className="btn" 
                  style={{fontSize: '10px', flex: 1}}
                >
                  УДАЛИТЬ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}