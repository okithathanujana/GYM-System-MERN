import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleUser } from '@fortawesome/free-solid-svg-icons';

const ReviewBlock = ({rate}) => {

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
    <div className='flex w-4/5 p-3 odd:flex-row-reverse rounded-xl border-yellow-500 border hover:shadow-lg hover:shadow-slate-900 transition-all duration-500'>
      <div className='flex-1 rounded-full overflow-hidden flex items-center justify-center'>
        <FontAwesomeIcon className='text-[60px]' icon={faCircleUser} />
      </div>
      <div className='flex-[5]'>
        <p className={`${'odd' ? 'text-right' : 'text-left'} text-[.85em]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quidem animi delectus magnam atque at nobis minima numquam ducimus impedit possimus itaque illo doloribus laudantium non unde ratione, excepturi rerum.</p>
        <div className={`flex gap-3 ${'odd' ? 'justify-start' : 'justify-end'} mt-3`}>{stars()}</div>
      </div>
    </div>
  );
}

const PackageFeedback = ({gymPackage}) => {
  return (
    <div className='flex flex-col gap-3 justify-center items-center p-10 w-[60vw] rounded-xl min-h-[25vh] bg-[#c7c7c7c4] relative'>
      <p className='uppercase text-[7.5em] font-semibold text-yellow-500 -z-10 absolute -top-3 left-5' >{gymPackage}</p>
        <ReviewBlock rate={2} />
        <ReviewBlock rate={4} />
        <ReviewBlock rate={1} />
    </div>
  );
}

export default PackageFeedback