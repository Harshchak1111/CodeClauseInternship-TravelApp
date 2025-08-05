import React, { useEffect, useState } from 'react';
import api from '../api';
import TourCard from '../components/TourCard'; // Reuse the component

const Tours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    api.get('/tours')
      .then(res => setTours(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="tour-list">
      {tours.length > 0 ? (
        tours.map(tour => <TourCard key={tour._id} tour={tour} />)
      ) : (
        <p>No tours found.</p>
      )}
    </div>
  );
};

export default Tours;
