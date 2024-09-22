import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleUser } from '@fortawesome/free-solid-svg-icons';

const ReviewBlock = ({ rate }) => {
  const stars = () => {
    const starElements = [];
    
    for (let i = 0; i < rate; i++) {
      starElements.push(
        <FontAwesomeIcon className="text-yellow-500 text-[1.25em]" key={i} icon={faStar} />
      );
    }
    for (let i = rate; i < 5; i++) {
      starElements.push(
        <FontAwesomeIcon className="text-zinc-500 text-[1.25em]" key={i} icon={faStar} />
      );
    }
    
    return starElements;
  };

  return (
    <div className='flex gap-2 flex-row-reverse items-center p-3 rounded-2xl bg-[#fffbd662]' >
      <div className='flex-1 rounded-full overflow-hidden flex items-center justify-center'>
        <FontAwesomeIcon className='text-[60px]' icon={faCircleUser} />
      </div>
      <div className='flex-[5]'>
        <p className='text-[.85em]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quidem animi delectus magnam atque at nobis minima numquam ducimus impedit possimus itaque illo doloribus laudantium non unde ratione, excepturi rerum.</p>
        <div className='flex gap-3 justify-end'>{stars()}</div>
      </div>
    </div>
  );
}

const InstructorFeedback = () => {
  return (
    <div className='flex gap-3 justify-center items-start p-10 w-[60vw] rounded-xl bg-[#c7c7c7c4]'>
      <div className="flex-1 flex flex-col gap-2">
        <div className='aspect-[4/5] rounded-xl overflow-hidden'>
          <img className='w-[125%] relative top-[-10%]' src="/images/instructor_placeholder.jpg" alt="intructor-profile" />
        </div>
        <p className='text-[1.35em] font-semibold capitalize text-amber-700' >Instructor Name</p>
      </div>
      <div className='flex-[3] flex flex-col gap-3'>
        <ReviewBlock rate={2} />
        <ReviewBlock rate={4} />
        <ReviewBlock rate={1} />
      </div>
    </div>
  )
}

export default InstructorFeedback
