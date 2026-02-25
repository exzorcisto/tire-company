import ProfileSidebar from '../components/ProfileSidebar';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="profile-layout">
      <ProfileSidebar />
      <div className="profile-content">
        <h2>Добро пожаловать, {user?.name}!</h2>
        <p style={{ marginTop: '10px', color: '#666' }}>Это ваш личный кабинет. Здесь вы можете управлять своими заявками и настройками.</p>
        <div style={{ marginTop: '30px' }}>
          <p><strong>Ваш логин:</strong> {user?.username}</p>
          <p><strong>Статус:</strong> Авторизован</p>
        </div>
        <button className="btn" onClick={handleLogout} style={{ marginTop: '30px', backgroundColor: '#d32f2f' }}>
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
}