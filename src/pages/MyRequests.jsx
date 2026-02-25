import ProfileSidebar from '../components/ProfileSidebar';

export default function MyRequests() {
  const requests = [
    { id: '102-A', date: '2026-02-15', status: 'Доставлено', item: 'EcoTire Winter Pro (4 шт.)' },
    { id: '105-B', date: '2026-02-24', status: 'В обработке', item: 'EcoTire Summer Grip (2 шт.)' },
  ];

  return (
    <div className="profile-layout">
      <ProfileSidebar />
      <div className="profile-content">
        <h2>Мои заявки</h2>
        <div style={{ marginTop: '20px' }}>
          {requests.map(req => (
            <div key={req.id} style={{ borderBottom: '1px solid #ccc', paddingBottom: '15px', marginBottom: '15px' }}>
              <h4>Заказ #{req.id} от {req.date}</h4>
              <p><strong>Товар:</strong> {req.item}</p>
              <p><strong>Статус:</strong> <span style={{ color: req.status === 'В обработке' ? 'orange' : 'var(--primary-green)' }}>{req.status}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}