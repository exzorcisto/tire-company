import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>В путешествие с SIBIREA TIRES</h1>
        <p style={{marginBottom: '30px', fontSize: '18px'}}>Бескомпромиссное сцепление в условиях суровой зимы</p>
        <Link to="/catalog" className="btn">В каталог</Link>
      </section>

      <section style={{padding: '60px 0', textAlign: 'center'}}>
        <h2 style={{textTransform: 'uppercase', marginBottom: '40px'}}>Популярные категории</h2>
        <div className="grid">
          <div className="card">
            <div style={{height: '200px', background: '#333'}}></div>
            <div className="card-content">
              <h3>Зимние шины</h3>
              <Link to="/catalog" style={{color: 'var(--brand-red)'}}>Смотреть →</Link>
            </div>
          </div>
          <div className="card">
            <div style={{height: '200px', background: '#222'}}></div>
            <div className="card-content">
              <h3>Спортивные шины</h3>
              <Link to="/catalog" style={{color: 'var(--brand-red)'}}>Смотреть →</Link>
            </div>
          </div>
          <div className="card">
            <div style={{height: '200px', background: '#444'}}></div>
            <div className="card-content">
              <h3>Внедорожные</h3>
              <Link to="/catalog" style={{color: 'var(--brand-red)'}}>Смотреть →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}