import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }
    // Здесь обычно идет запрос к API, но для курсовой просто имитируем успех
    console.log('Данные регистрации:', formData);
    alert('Регистрация прошла успешно! Теперь войдите в систему.');
    navigate('/login');
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card">
        <h2>Регистрация</h2>
        
        {error && <div className="error-msg" style={{textAlign: 'center', marginBottom: '15px'}}>{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="fullName"
            placeholder="ФИО" 
            value={formData.fullName}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email"
            placeholder="EMAIL" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <input 
            type="password" 
            name="password"
            placeholder="ПАРОЛЬ" 
            value={formData.password}
            onChange={handleChange}
            required 
          />
          <input 
            type="password" 
            name="confirmPassword"
            placeholder="ПОДТВЕРДИТЕ ПАРОЛЬ" 
            value={formData.confirmPassword}
            onChange={handleChange}
            required 
          />
          
          <button type="submit" className="btn" style={{ width: '100%', marginTop: '10px' }}>
            Создать аккаунт
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
          Уже есть аккаунт? <Link to="/login" style={{ color: 'var(--brand-red)', textDecoration: 'none' }}>Войти</Link>
        </div>
      </div>
    </div>
  );
}