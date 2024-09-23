import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faChevronLeft, faChevronRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/SearchBar';
import Axios from 'axios';

const TableHead = ({ content }) => {
  return (
    <div className='w-full flex items-center p-1 rounded-lg bg-yellow-600'>
      {content.map((element, index) => (
        <div key={index} className={` ${element === 'Feedback' ? 'flex-[3]' : 'flex-1'} flex justify-center items-center font-semibold text-slate-50`}>
          {element}
        </div>
      ))}
    </div>
  );
};

const TableData = ({ content, deleteFeedback }) => {
  return (
    <div className='flex flex-col w-full gap-2 mt-2'>
      {content.map((element, index) => (
        <div key={index} className={` ${element.pfType === 'complaint' ? 'outline-red-600' : ''} ${element.pfType === 'suggestion' ? 'outline-lime-600' : ''} ${element.pfType === 'question' ? 'outline-blue-600' : ''} flex items-center p-[6px] rounded-2xl transition-all duration-300 hover:shadow-md hover:shadow-zinc-800 outline outline-1 outline-offset-[-5px]`}>
          <div className='flex-1 flex justify-center items-center text-[16px]'>
            {new Date(element.pfDate).toLocaleDateString()}
          </div>
          <div className='flex-1 flex justify-center items-center text-[16px]'>{element.cusName}</div>
          <div className='flex-1 flex justify-center items-center text-[16px]'>{element.cusEmail}</div>
          <div className='flex-1 flex justify-center items-center text-[16px]'>{element.pName}</div>
          <div className='flex-1 flex justify-center items-center text-[18px]'>{element.pfRate}</div>
          <div className='flex-[3] flex justify-center items-center text-[16px]'>{element.pfNote}</div>
          <div className='flex-1 flex justify-center items-center text-[16px] gap-4'>
            <span className={` ${element.status === 'reject' ? 'outline outline-1 outline-offset-[-5px] outline-green-600 text-green-600' : 'bg-green-800 text-green-100'} transition-all duration-300 py-2 px-3 rounded-xl text-[1.25em] hover:shadow-md hover:shadow-zinc-800 cursor-pointer hover:rounded-none z-10`}>
              <FontAwesomeIcon icon={faThumbsUp} />
            </span>
            <span className={` ${element.status === 'approve' ? 'outline outline-1 outline-offset-[-5px] outline-red-600 text-red-600' : 'bg-red-800 text-red-100'} transition-all duration-300 py-2 px-3 rounded-xl text-[1.25em] hover:shadow-md hover:shadow-zinc-800 cursor-pointer hover:rounded-none z-10`}>
              <FontAwesomeIcon icon={faThumbsDown} />
            </span>
            <span
              className="bg-orange-900 text-orange-100 transition-all duration-300 py-2 px-3 rounded-xl text-[1.25em] hover:shadow-md hover:shadow-zinc-800 cursor-pointer  hover:rounded-none z-10"
              onClick={() => deleteFeedback(element.pfID)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const TablePagination = ({ nowIndex, totalIndex, paginFunction }) => {
  const paginBtns = [];
  for (let i = 0; i < totalIndex; i++) {
    paginBtns.push(
      <div className={` ${i === nowIndex ? 'bg-slate-600 text-slate-50' : 'text-slate-600'} outline outline-2 outline-offset-[-3px] text-[1em] outline-slate-600 px-3 py-1 rounded-lg hover:bg-slate-600 transition-all duration-300 hover:text-slate-50 cursor-pointer`} key={i} onClick={() => paginFunction(i + 1)}>{i + 1}</div>
    );
  }
  return (
    <div className="flex gap-2 items-center justify-center mt-6">
      <div className='outline outline-2 outline-offset-[-3px] text-[1em] text-slate-600 outline-slate-600 px-3 py-1 rounded-lg hover:bg-slate-600 transition-all duration-300 hover:text-slate-50 cursor-pointer' onClick={() => paginFunction('<')}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      {paginBtns}
      <div className='outline outline-2 outline-offset-[-3px] text-[1em] text-slate-600 outline-slate-600 px-3 py-1 rounded-lg hover:bg-slate-600 transition-all duration-300 hover:text-slate-50 cursor-pointer' onClick={() => paginFunction('>')}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};

export const ShowFeedbacksTable = ({ reviewType }) => {
  const [thisPage, setThisPage] = useState(1);
  const [packageReviews, setPackageReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  useEffect(() => {
    fetch('http://localhost:3001/api/package-feedbacks')
      .then(response => response.json())
      .then(data => {
        setPackageReviews(data.response);
        console.log(data.response);
      })
      .catch(error => {
        console.error('Error fetching package feedbacks:', error);
      });
  }, []);

  const deleteFeedback = (pfID) => {
    console.log(pfID);
    const payload = { pfID: pfID };
    Axios.post('http://localhost:3001/api/delete-package-feedback', payload)
      .then((response) => {
        alert('Successfully deleted');
        setPackageReviews(prevReviews => prevReviews.filter(review => review.pfID !== pfID));
      })
      .catch((error) => {
        console.error('Axios Error: ', error);
      });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredReviews = packageReviews.filter(review =>
    review.cusName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    review.pName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const tableHead = ['Date', 'Customer', 'Email', reviewType === 'instructors' ? 'Instructor' : 'Package', 'Rating', 'Feedback', 'Actions'];
  const maxRows = 5;
  const maxPages = Math.ceil(filteredReviews.length / maxRows);
  
  const dataSet = filteredReviews.slice(
    (thisPage - 1) * maxRows,
    thisPage * maxRows
  );

  const handlePagination = (direction) => {
    if (direction === '>' && thisPage < maxPages) {
      setThisPage(thisPage + 1);
    } else if (direction === '<' && thisPage > 1) {
      setThisPage(thisPage - 1);
    } else if (!isNaN(direction)) {
      setThisPage(parseInt(direction, 10));
    }
  };

  return (
    <div className='flex justify-center flex-col gap-6 p-10 bg-[#c7c7c72c] rounded-2xl backdrop-blur-sm items-center'>
      <SearchBar placeholder='Search here ..' onInput={handleSearch} />
      <div className='flex flex-col justify-center items-center p-3 rounded-xl bg-[#c7c7c7c4] w-[80vw]'>
        <TableHead content={tableHead} />
        <TableData content={dataSet} deleteFeedback={deleteFeedback} />
        <TablePagination nowIndex={thisPage - 1} totalIndex={maxPages} paginFunction={handlePagination} />
      </div>
    </div>
  );
};
