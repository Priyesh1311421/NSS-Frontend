import React from 'react';

const ContactUs = () => {
  return (
    <section id="contactus" className=" bg-white p-8">
      <h2 className="text-3xl font-bold mb-4 justify-self-center">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300" />
        <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300" />
        <textarea placeholder="Message" className="w-full p-2 border border-gray-300"></textarea>
        <div className='flex justify-center'>
         <button type="submit" className="bg-gray-800  rounded-lg self-center text-white p-2">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
