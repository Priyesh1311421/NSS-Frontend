import React from 'react';

const UpcomingEvents = () => {
  const events = [
    {
      title: 'Blood Donation Camp',
      date: 'August 15, 2024',
      description: 'Join us for a blood donation camp to save lives.'
    },
    {
      title: 'Cleanliness Drive',
      date: 'September 10, 2024',
      description: 'Participate in our cleanliness drive to keep our surroundings clean.'
    },
    {
      title: 'Tree Plantation',
      date: 'October 5, 2024',
      description: 'Help us plant trees and make our city greener.'
    }
  ];

  return (
    <section id="upcoming-events" className="h-auto bg-gray-300 p-8">
      <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-600 mb-2">{event.date}</p>
            <p className="text-gray-800">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
