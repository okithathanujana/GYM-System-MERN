import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleUser } from '@fortawesome/free-solid-svg-icons';

const ReviewBlock = ({ rate, cusName, pfNote }) => {
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
        <p className='text-[.85em]'>{cusName}</p>
        <p className='text-[.85em] mt-1'>{pfNote}</p>
        <div className='flex gap-3 justify-start mt-3'>{stars()}</div>
      </div>
    </div>
  );
}

const PackageFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:3001/api/package-feedbacks')
      .then(response => response.json())
      .then(data => {
        // Access the response array and filter feedbacks where pName is 'silva'
        console.log(data.response);
        const filteredFeedbacks = data.response.filter(feedback => feedback.pName === 'gold');
        console.log(filteredFeedbacks)
        setFeedbacks(filteredFeedbacks);
      })
      .catch(error => console.error('Error fetching feedbacks:', error));
  }, []);

  return (
    <div className='flex flex-col gap-3 justify-center items-center p-10 w-[60vw] rounded-xl min-h-[25vh] bg-[#c7c7c7c4] relative'>
      <p className='uppercase text-[7.5em] font-semibold text-yellow-500 -z-10 absolute -top-3 left-5'>Gold</p>

      {/* Display feedback blocks */}
      {feedbacks.length > 0 ? (
        feedbacks.map(feedback => (
          <ReviewBlock
            key={feedback._id}
            rate={feedback.pfRate}
            cusName={feedback.cusName}
            pfNote={feedback.pfNote}
          />
        ))
      ) : (
        <p>No feedback available for Silva package.</p>
      )}
    </div>
  );
}

export default PackageFeedback;
