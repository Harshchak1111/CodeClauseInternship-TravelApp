import React from 'react';
import { Link } from 'react-router-dom';

const TourCard = ({ tour }) => {
  return (
    <div className="tour-card bg-white dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-black dark:text-white mb-2">{tour.title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{tour.description}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        <strong>Location:</strong> {tour.location}
      </p>
      <Link to={`/book/${tour._id}`}>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Book Now
        </button>
      </Link>
    </div>
  );
};

export default TourCard;