import ProfileSidebar from '../components/ProfileSidebar';

export default function Settings() {
  return (
    <div className="profile-layout">
      <ProfileSidebar />
      <div className="profile-content">
        <h2>Настройки личного кабинета</h2>
        <form style={{ maxWidth: '400px', marginTop: '20px' }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: '15px' }}>
            <label>Изменить имя</label>
            <input type="text" defaultValue="Иван Иванов" style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Уведомления на почту</label>
            <div style={{ marginTop: '5px' }}>
              <input type="checkbox" id="news" defaultChecked /> <label htmlFor="news">Новости и акции</label>
            </div>
          </div>
          <button className="btn">Сохранить изменения</button>
        </form>
      </div>
    </div>
  );
}