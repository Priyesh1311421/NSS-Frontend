import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const Notice = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbwsmNB6kEUZ-zyWbGSAdFvIjPZjEb3-tCs9AHGMxOOj9RvkkH1-5SlFv8XSPGf9Bx4Ouw/exec')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setEvents(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="upcoming-events" className="h-auto bg-gray-300 p-8">
      <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(3).fill('').map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md animate-pulse">
              <div className="flex justify-between mb-4">
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
              </div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.slice(1, 8).map((event, index) => (
            event.Heading ? (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <div className='flex justify-between'>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{event.Heading}</h3>
                    <p className="text-gray-600 mb-2">{event.Date ? dayjs(event.Date).format('MMMM D, YYYY') : 'No date available'}</p>
                  </div>
                </div>
                <p className="text-gray-800">{event.Description || 'No description available'}</p>
              </div>
            ) : null
          ))}
        </div>
      )}
    </section>
  );
};

export default Notice;
