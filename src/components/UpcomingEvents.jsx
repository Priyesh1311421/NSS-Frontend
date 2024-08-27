import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://script.googleusercontent.com/a/macros/nsut.ac.in/echo?user_content_key=rBsKIhaAos5a0uHcLa_S6ltUTqw_z4DNvQVQLV19h8LqtUqvnx6E2l460m-p6LIvDWfjlpKGguu_uJimVb0PrqJMFZfUGIThm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP9FvU40f20LNCHaYKxUla6AaJpwTgVCNrY50xA_kv9yT--ORMvEdnIgEnkYkK3-rFWhGtSyX0zwrar47cI7VdkvHxUl575noFvMSWCNI_MJO67qmGuB6ZGyXMuqa_jo9BU&lib=Mj7t-TBtd-sTE8l9itWmZHIMmsRg3-2UW')
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
        console.error('Fetching events failed: ', error);
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
                <div className="flex-1 ml-4">
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.slice(1, 4).map((event, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <div className='flex justify-between'>
                {/* Uncomment and use the below code if ImageUrl is available in your data */}
                {/* {event.ImageUrl && (
                  <img
                    src={event.ImageUrl}
                    alt={event.Heading}
                    className="w-28 h-28 object-cover rounded-md mb-4"
                  />
                )} */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">{event.Heading}</h3>
                  <p className="text-gray-600 mb-2">
                    {event.Date ? dayjs(event.Date).format('MMMM D, YYYY') : 'No date available'}
                  </p>
                </div>
              </div>
              <p className="text-gray-800">{event.Description || 'No description available'}</p>
            </div>
          ))}
        </div>
        <div className='flex justify-end pt-2'>
            <button onClick={()=>{navigate('/notices')}} className=' bg-gray-800 rounded-lg p-2 text-white'>More</button>
        </div>
        </>
      )}
    </section>
  );
};

export default UpcomingEvents;
