import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

const BookTour = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ date: '', people: 1 });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/bookings', { ...form, tourId: id }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Booking Successful!');
      navigate('/tours');
    } catch (err) {
      alert('Booking failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date: <input type="date" name="date" onChange={handleChange} required /></label>
      <label>People: <input type="number" name="people" onChange={handleChange} min="1" required /></label>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookTour;