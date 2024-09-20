import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const TableHead = (content) => {
  return (
    <div className='flex items-center p-1 rounded-lg bg-slate-800'>
      {
        content.forEach(element => (
          <div className='flex-1 flex justify-center items-center font-semibold text-slate-50'>{element}</div>
        ))
      }
    </div>
  );
}

const TableData = (content) => {

  return (
    <div className='flex flex-col '>
      {
        content.map((element, index) => (
          <div key={index} className='flex items-center p-1 rounded-lg'>
            <div className='flex-1 flex justify-center items-center'>{element.date}</div>
            <div className='flex-1 flex justify-center items-center'>{element.name}</div>
            <div className='flex-1 flex justify-center items-center'>{element.email}</div>
            <div className='flex-1 flex justify-center items-center'>{element.specialty}</div>
            <div className='flex-1 flex justify-center items-center'>{element.rate}</div>
            <div className='flex-1 flex justify-center items-center'>{element.review}</div>
            <div className='flex-1 flex justify-center items-center'>
              <span className=''>
                <FontAwesomeIcon icon={faThumbsUp} />
              </span>
              <span className=''>
                <FontAwesomeIcon icon={faThumbsDown} />
              </span>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export const ShowFeedbacksTable = (reviewType) => {

  const tableHead = ['Date', 'Customer', 'Email', reviewType === 'instructors' ? 'Instructor' : 'Package', 'Rating', 'Feedback', 'Actions' ];

  return (
    <div className='p-3 rounded-xl bg-gray-400 flex flex-col'>
      <TableHead content={tableHead} />
      <TableData content={''} />
    </div>
  )
}
