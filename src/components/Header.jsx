import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { selectCartTotal } from '../store/slices/cartSlice';

export default function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const cartCount = useSelector(selectCartTotal); // Используем мемоизированный селектор

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">SIBIREA <span>TIRES</span></Link>
        <nav className="header-nav">
          <Link to="/">Главная</Link>
          <Link to="/catalog">Каталог</Link>
          <Link to="/info">Технологии</Link>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '20px' }}>
            <span style={{ color: 'var(--brand-red)', fontWeight: 'bold', marginRight: '15px' }}>
              ЗАЯВКИ: {cartCount}
            </span>
            
            {user ? (
              <>
                <span style={{ color: '#fff', fontSize: '12px', marginRight: '10px' }}>{user.name}</span>
                <button onClick={() => dispatch(logout())} className="btn" style={{ padding: '5px 10px', fontSize: '10px' }}>Выйти</button>
              </>
            ) : (
              <Link to="/login" className="btn">Войти</Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}