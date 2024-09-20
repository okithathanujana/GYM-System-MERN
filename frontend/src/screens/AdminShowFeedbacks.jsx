import { React, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ShowFeedbacksTable } from '../components/ShowFeedbacksTable';

const AdminShowFeedbacks = () => {

  const { type } = useParams();

  useEffect(() => {
    document.title = `Show Feedback ${type} | AURA Fitness | Admin`;
  }, [type]);

  const bgImageURL = type === 'instructors'
    ? '/images/2137499-1920x1080-desktop-1080p-gym-motivation-wallpaper.jpg'
    : '/images/wp12384140.jpg' 
  ;

  return (
    <div className='flex w-screen h-screen bg-cover bg-center bg-no-repeat justify-center items-center' style={{ backgroundImage: `url(${bgImageURL})` }}>
      <div className='flex justify-center flex-col gap-6 p-10 bg-[#c7c7c72c] rounded-2xl backdrop-blur-sm items-center'>
        <div className='flex flex-col gap-5 justify-center items-center p-10 rounded-xl bg-[#c7c7c7c4]'>
          <ShowFeedbacksTable reviewType={type} />
        </div>
      </div>
    </div>
  )
}

export default AdminShowFeedbacks