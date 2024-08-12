import React from 'react'
import image1 from '../assets/vc.jpg'

const Desk = () => {
  return (
    <div className='flex items-center shadow-lg my-10 flex-col lg:flex-row bg-white rounded-lg'>
        <div className='w-full lg:w-72'>
            <div className='flex flex-col items-center rounded-md justify-center h-72 w-full lg:w-72 bg-gray-800'>
                <img className='rounded-full h-56 w-56' src={image1}/>
                <div className='my-4 text-white'>
                    <h2>Professor Anand Srivastava </h2>
                </div>
            </div>
        </div> 
        <p className='text-[20px] mx-8 my-5 lg:my-2'>
            NSUT is nationally known for holistic education focusing on research, innovation and application. The University currently offers various programs at Doctorate, Post Graduate and undergraduate levels. We aim at nurturing the students holistically and endeavour to foster a culture in which virtues and skills are instilled in them, along with a concern for society and its wellbeing. I extend my best wishes to the students who wish to be a part of this premier University.
        </p>
    </div>
  )
}

export default Desk