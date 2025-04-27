import React from 'react';

const ServiceCard = ({ service }) => {
    return (
      <div className="w-80 flex-shrink-0 bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-center mb-4">
          <div className="bg-pink-100 p-4 rounded-full">
            <img src={service.image} alt={service.title} className="w-12 h-12" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
        <p className="text-pink-500 text-lg font-semibold mb-4">${service.price}</p>
        <p className="text-gray-600 text-sm">{service.description}</p>
      </div>
    );
  };
  

export default ServiceCard;
