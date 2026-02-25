import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          SIBIREA <span>TIRES</span>
        </Link>
        <nav className="header-nav">
          <Link to="/">Главная</Link>
          <Link to="/catalog">Все шины</Link>
          <Link to="/info">Технологии</Link>
          {user ? (
            <Link to="/profile" className="btn">Кабинет</Link>
          ) : (
            <Link to="/login" className="btn">Войти</Link>
          )}
        </nav>
      </div>
    </header>
  );
}