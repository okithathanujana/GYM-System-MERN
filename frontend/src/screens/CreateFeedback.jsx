import React from 'react'
import { useParams } from 'react-router-dom';

const CreateFeedback = () => {

  const { type } = useParams();

  return (
    <div className='flex w-screen h-screen bg-cover bg-center bg-no-repeat justify-center items-center'  style={{ backgroundImage: 'url(./images/sven-mieke-OgfQZQzZ050-unsplash.jpg)' }}>
      <div className='flex justify-center flex-col gap-6 p-10 bg-[#c7c7c72c] rounded-2xl backdrop-blur-sm items-center'>
        <div className='flex flex-col gap-5 justify-center items-center p-10 rounded-xl bg-[#c7c7c7c4]'></div>
      </div>
    </div>
  )
}

export default CreateFeedback