import React from 'react'
import CoordinatorImg from '../assets/Coordinator.jpg'

const Coordinator = () => {
  return (
    <div className="bg-gray-300 p-8 flex flex-col" >
        <div className='flex justify-center'>
            <div className='font-bold text-3xl'>
             From the NSS NSUT Coordinator's Desk
            </div>
        </div>
        <div className='flex items-center shadow-lg my-10 flex-col lg:flex-row bg-white rounded-lg'>
            <p className='text-[20px] mx-8 my-5 lg:my-2'>
            NSS NSUT Cell was founded during the COVID-19 pandemic, with volunteers showing remarkable resilience. Over the past three years, the organization has evolved into a dedicated force for social and community service, fostering leadership and altruism among the youth. From organizing sports tournaments to village outreach and health initiatives, the team has excelled in various endeavors, proudly representing the university at national events. With a deep commitment to patriotism and progress, NSS NSUT Cell looks forward to achieving new milestones together. Jai Hind!
            </p>
            <div className='w-full lg:w-72'>
                <div className='flex flex-col items-center rounded-md justify-center h-72 w-full lg:w-72 bg-gray-800'>
                    <img className='rounded-full h-56 w-56' src={CoordinatorImg}/>
                    <div className='my-4 text-white'>
                        <h2>Dr. Praveen Saroha </h2>
                    </div>
                </div>
            </div> 
            
        </div>
    </div>
  )
}

export default Coordinator