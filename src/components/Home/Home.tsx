import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/images/background-image.jpg';

const Home = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Patient Management Portal
        </h1>
        <Link
          to={'/patients'}
          className="text-xl text-blue-400 hover:underline hover:text-blue-300"
        >
          Please click here to view our Patients List
        </Link>
      </div>
    </div>
  );
};

export default Home;
