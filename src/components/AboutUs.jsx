import React, { useEffect, useState } from 'react';
import Desk from './Desk'; // Ensure this import is correct

const AboutUs = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://script.googleusercontent.com/a/macros/nsut.ac.in/echo?user_content_key=rBsKIhaAos5a0uHcLa_S6ltUTqw_z4DNvQVQLV19h8LqtUqvnx6E2l460m-p6LIvDWfjlpKGguu_uJimVb0PrqJMFZfUGIThm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP9FvU40f20LNCHaYKxUla6AaJpwTgVCNrY50xA_kv9yT--ORMvEdnIgEnkYkK3-rFWhGtSyX0zwrar47cI7VdkvHxUl575noFvMSWCNI_MJO67qmGuB6ZGyXMuqa_jo9BU&lib=Mj7t-TBtd-sTE8l9itWmZHIMmsRg3-2UW')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setEvents(data.data); // Adjust as per the actual structure of the response
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetching events failed: ', error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="recent-events" className="bg-gray-300 p-8">
      <h2 className="text-3xl font-bold mb-4">Recent Events</h2>
    
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {Array(6).fill(null).map((_, index) => (
            <div key={index} className="flex flex-col justify-center items-center bg-white p-4 rounded-lg shadow-md">
              <div className="w-full h-64 bg-gray-300 animate-pulse rounded-lg mb-4"></div>
              <div className="w-3/4 h-6 bg-gray-300 animate-pulse rounded-md mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-200 animate-pulse rounded-md"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {events.slice(10,16).map((event, index) => (
            <div key={index} className="flex flex-col justify-center items-center bg-white p-4 rounded-lg shadow-md">
              <img src={event.ImageUrl} alt={`About Us ${index + 1}`} className="w-full h-auto rounded-lg mb-4 transform transition duration-500 hover:scale-110" />
              <h3 className="text-lg font-semibold">{event.Heading}</h3>
              <p className="text-gray-600">{event.Description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AboutUs;
