import React from 'react'
import { FaYoutube } from 'react-icons/fa';
const Video = () => {
  return (
    <div className='p-3 bg-gray-300 px-10 '>
        <div className='youtube py-1 flex items-center'>
        <a href="https://www.youtube.com/channel/YourChannelID" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-4xl text-red-600 mx-1" />
        </a>
          <h3 className='font-bold text-white cursor-pointer'>YouTube</h3></div>
        <div className='md:flex md:justify-around'>
            <iframe className='rounded-md md:h-[255px] md:w-[370px] py-1' src="https://www.youtube.com/embed/UgBSUUX8FvY?si=GhuEXRqHj9M6od1P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className='rounded-md md:h-[255px] md:w-[370px] py-1' src="https://www.youtube.com/embed/1xpYrSS3bA4?si=5rJLoIuR2w0DF9wa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className='rounded-md md:h-[255px] md:w-[370px] py-1' src="https://www.youtube.com/embed/uWod247LdSg?si=o2PSY5jV8BLb60UH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className='flex justify-end pt-2'>
            <button className=' bg-gray-800 rounded-lg p-2 text-white'><a href='https://www.youtube.com/@nationalserviceschemensut2101/videos'>More...</a></button>
        </div>
    </div>
  )
}

export default Video