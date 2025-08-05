import React from 'react';

const Home = () => {
  return (
    <section className="py-12 px-6 bg-gray-900">
  <h2 className="text-3xl font-bold text-center mb-8 text-white">Top Destinations</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
    {["close-up-man-prepared-traveling.jpg", "pexels-sagui-andrea.jpg", "pexels-sebastian-palomino.jpg"].map((img, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden w-56 h-56 mx-auto">
        <img
          src={`/assets/${img}`}
          alt={`Destination ${index + 1}`}
          className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
</section>

  );
};

export default Home;
