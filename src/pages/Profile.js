import React, { useState, useEffect } from 'react';

function Profile() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('userBookings')) || [];
    setBookings(savedBookings);
  }, []);

  const handleCancel = (id) => {
    if (window.confirm('Ви впевнені, що хочете скасувати бронювання квитків?')) {
      const updatedBookings = bookings.filter(b => b.id !== id);
      setBookings(updatedBookings);
      localStorage.setItem('userBookings', JSON.stringify(updatedBookings));
    }
  };

  return (
    <main className="profile-main">
      <div className="profile-header">
        <img 
          src="https://picsum.photos/seed/user/100/100" 
          alt="Avatar" 
          className="avatar" 
        />
        <div className="profile-user-info">
          <h1>Мій кабінет</h1>
          <p>Ваші замовлення та квитки</p>
        </div>
      </div>

      <h2>Мої квитки</h2>

      <div className="booking-container">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <div className="booking-info">
                <h3>{booking.title}</h3>
                <p>📅 {booking.date}</p>
                <p>📍 {booking.location}</p>
                <p><strong>Кількість квитків:</strong> {booking.quantity} шт.</p>
                <p className="price">Сума: {booking.totalPrice} грн</p>
              </div>

              <div className="booking-status">
                <span className="badge success">{booking.status}</span>
                <button 
                  className="cancel-btn" 
                  onClick={() => handleCancel(booking.id)}
                >
                  Скасувати
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-msg">
            <p>У вас поки немає заброньованих квитків.</p>
            <a href="/" style={{ color: '#838a1e', fontWeight: 'bold' }}>Переглянути події</a>
          </div>
        )}
      </div>
    </main>
  );
}

export default Profile;