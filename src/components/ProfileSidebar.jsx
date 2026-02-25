import { Link, useLocation } from 'react-router-dom';

export default function ProfileSidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <aside className="sidebar">
      <h3>Меню кабинета</h3>
      <nav className="sidebar-menu" style={{ marginTop: '15px' }}>
        <Link to="/profile" className={isActive('/profile')}>Профиль</Link>
        <Link to="/profile/requests" className={isActive('/profile/requests')}>Мои заявки</Link>
        <Link to="/profile/settings" className={isActive('/profile/settings')}>Настройки ЛК</Link>
      </nav>
    </aside>
  );
}