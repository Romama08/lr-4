import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import eventsData from '../events.json';

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const event = eventsData.find(e => e.id === parseInt(id));

  const [qty, setQty] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (!event) {
    return (
      <div className="details-main">
        <h2>Подію не знайдено</h2>
      </div>
    );
  }

  const pricePerTicket = parseInt(event.price.replace(/\D/g, '')) || 0;
  const totalAmount = pricePerTicket * Math.max(0, (Number(qty) || 0));

  const handleBooking = (e) => {
    e.preventDefault();
    if (Number(qty) < 1) return alert("Оберіть кількість квитків");

    const newBooking = {
      id: Date.now(),
      title: event.title,
      date: event.date,
      location: event.location,
      image: event.image,
      quantity: Number(qty),
      totalPrice: totalAmount,
      status: "Заброньовано"
    };

    const bookings = JSON.parse(localStorage.getItem('userBookings')) || [];
    bookings.push(newBooking);
    localStorage.setItem('userBookings', JSON.stringify(bookings));
    navigate('/profile');
  };

  return (
    <main className="details-main">
      <div className="details-image-container">
        <img src={`/images/${event.image}`} alt={event.title} />
      </div>

      <div className="details-description">
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <p>📅 {event.date} | 📍 {event.location}</p>
        <p>Ціна квитка: <strong>{event.price}</strong></p>
      </div>

      <div className="booking-controls">
        {!showCheckout ? (
          <button 
            key="buy-btn"
            className="buy-now-btn" 
            onClick={() => setShowCheckout(true)}
          >
            Забронювати квитки
          </button>
        ) : (
          <section key="checkout-form" className="checkout-form-container">
            <h3>Оформлення замовлення</h3>
            <form onSubmit={handleBooking}>
              <div className="input-group">
                <label>Кількість квитків (шт.):</label>
                <input 
                  type="number" 
                  min="1" 
                  max="10"
                  value={qty} 
                  onChange={(e) => setQty(e.target.value)} 
                  required
                />
              </div>
              <div className="price-display" translate="no">
                <p>Загальна вартість: <strong>{totalAmount}</strong> грн</p>
              </div>

              <div className="input-group">
                <input 
                  type="text" 
                  placeholder="Ваше ім'я" 
                  required 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Email" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>

              <button type="submit" className="confirm-btn">Підтвердити замовлення</button>
              <button 
                type="button" 
                className="cancel-btn" 
                onClick={() => setShowCheckout(false)}
              >
                Скасувати
              </button>
            </form>
          </section>
        )}
      </div>
    </main>
  );
}

export default EventDetails;