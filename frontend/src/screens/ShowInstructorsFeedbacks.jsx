import React from 'react'
import SearchBar from '../components/SearchBar'
import InstructorFeedback from '../components/InstructorFeedback'

const ShowInstructorsFeedbacks = () => {
  return (
    <div className='flex w-screen min-h-screen bg-cover bg-center bg-no-repeat justify-center items-center' style={{ backgroundImage: 'url(/images/sven-mieke-jO6vBWX9h9Y-unsplash.jpg)' }}>
      <div className='flex justify-center flex-col gap-6 p-10 bg-[#c7c7c72c] rounded-2xl backdrop-blur-sm items-center'>
        <SearchBar placeholder='Search for your Instructor ..' />
        <div className='flex justify-center flex-col gap-3'>
          <InstructorFeedback />
          <InstructorFeedback />
          <InstructorFeedback />
          <InstructorFeedback />
        </div>
        </div>
    </div>
  )
}

export default ShowInstructorsFeedbacks