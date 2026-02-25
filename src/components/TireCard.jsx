export default function TireCard({ title, season, price }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p><strong>Сезонность:</strong> {season}</p>
      <p><strong>Цена:</strong> {price} ₸</p>
      <button className="btn" style={{ marginTop: '15px', width: '100%' }}>Заказать</button>
    </div>
  );
}