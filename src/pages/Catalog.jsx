import TireCard from '../components/TireCard';
import { useTiresFilter } from '../hooks/useTiresFilter';

const tiresData = [
  { id: 1, title: 'Sibirea North Ice 2', season: 'Зимние', price: 42500 },
  { id: 2, title: 'Sibirea Sport Contact', season: 'Летние', price: 38000 },
  { id: 3, title: 'Sibirea All-Road 4x4', season: 'Всесезонные', price: 51000 },
  { id: 4, title: 'Sibirea Arctic Grip', season: 'Зимние', price: 47900 },
];

export default function Catalog() {
  const { filter, setFilter, filteredData } = useTiresFilter(tiresData);

  return (
    <div style={{padding: '40px 0'}}>
      <h2 style={{textTransform: 'uppercase', borderLeft: '5px solid var(--brand-red)', paddingLeft: '15px'}}>Каталог продукции</h2>
      
      <div style={{ margin: '30px 0', padding: '20px', background: '#f9f9f9' }}>
        <span style={{marginRight: '15px', fontWeight: 'bold'}}>ФИЛЬТР:</span>
        <select onChange={(e) => setFilter(e.target.value)} style={{padding: '10px', border: '1px solid #ddd'}}>
          <option value="All">Все модели</option>
          <option value="Зимние">Зимние (Ice)</option>
          <option value="Летние">Летние (Sport)</option>
          <option value="Всесезонные">Всесезонные</option>
        </select>
      </div>

      <div className="grid">
        {filteredData.map(tire => (
          <div className="card" key={tire.id}>
             <div style={{height: '180px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#aaa'}}>IMAGE_PLACEHOLDER</div>
             <div className="card-content">
                <h3>{tire.title}</h3>
                <p style={{color: '#666', fontSize: '14px'}}>{tire.season}</p>
                <p className="price">{tire.price} ₽</p>
                <button className="btn" style={{width: '100%', marginTop: '15px'}}>Заказать</button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}