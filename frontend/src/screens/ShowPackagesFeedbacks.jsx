import React from 'react'
import SearchBar from '../components/SearchBar'
import PackageFeedback from '../components/PackageFeedback'

const ShowPackagesFeedbacks = () => {
  return (
    <div className='flex w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat justify-center items-center' style={{ backgroundImage: 'url(/images/sven-mieke-jO6vBWX9h9Y-unsplash.jpg)' }}>
      <div className='flex justify-center flex-col gap-6 p-10 bg-[#c7c7c72c] rounded-2xl backdrop-blur-sm items-center'>
        <SearchBar placeholder='Search for your Instructor ..' />
        <div className='flex justify-center flex-col gap-3'>
          <PackageFeedback gymPackage='silver' />
          <PackageFeedback gymPackage='gold' />
          <PackageFeedback gymPackage='platinum' />
        </div>
        </div>
    </div>
  )
}

export default ShowPackagesFeedbacks