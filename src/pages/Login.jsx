import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/profile');
    } else {
      setError('ОШИБКА: Неверные данные (user / 123456)');
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card">
        <h2>Авторизация</h2>
        {error && <p style={{color: 'var(--brand-red)', marginBottom: '15px', textAlign: 'center'}}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="ЛОГИН" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="ПАРОЛЬ" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" className="btn" style={{ width: '100%', marginTop: '10px' }}>Войти</button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
          Нет аккаунта? <Link to="/register" style={{ color: 'var(--brand-red)', textDecoration: 'none' }}>Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
}