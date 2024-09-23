import React, { useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import PackageFeedbackSilver from '../components/PackageFeedbackSilver'
import PackageFeedbackGold from '../components/PackageFeedbackGold'
import PackageFeedbackPlatinum from '../components/PackageFeedbackPlatinum'

const ShowPackagesFeedbacks = () => {

  useEffect(() => {
    document.title = `Packages Feedbacks | AURA Fitness`;
  });
  
  return (
    <div className='flex w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat justify-center items-center' style={{ backgroundImage: 'url(/images/sven-mieke-jO6vBWX9h9Y-unsplash.jpg)' }}>
      <div className='flex justify-center flex-col gap-6 p-10 bg-[#c7c7c72c] rounded-2xl backdrop-blur-sm items-center'>
        <SearchBar placeholder='Search for your Instructor ..' />
        <div className='flex justify-center flex-col gap-3'>
          <PackageFeedbackSilver/>
          <PackageFeedbackGold/>
          <PackageFeedbackPlatinum/>
          {/* <PackageFeedback gymPackage='gold' />
          <PackageFeedback gymPackage='platinum' /> */}
        </div>
        </div>
    </div>
  )
}

export default ShowPackagesFeedbacks