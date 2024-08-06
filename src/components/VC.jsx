import React from 'react'
import Desk from './Desk'

const VC = () => {
  return (
    <div className="bg-gray-300 p-8 flex flex-col" >
        <div className='flex justify-center'>
            <div className='font-bold text-3xl'>
             From the VC's Desk
            </div>
        </div>
        <Desk/>
    </div>
  )
}

export default VC