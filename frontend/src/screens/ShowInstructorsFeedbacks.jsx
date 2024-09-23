import React, { useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import InstructorFeedback from '../components/InstructorFeedback';

const instructors = [
  'Alex Johnson',
  'Mia Torres',
  'Ryan Smith',
  'Jessica Lee',
  'David Kim',
  'Emily Garcia',
  'Chris Patel',
  'Sarah Brown',
  'Mark Wilson',
  'Olivia Martinez',
  'Daniel Nguyen',
  'Sophie Davis'
];

const ShowInstructorsFeedbacks = () => {
  useEffect(() => {
    document.title = `Instructor Feedbacks | AURA Fitness`;
  }, []);

  return (
    <div className='flex w-full min-h-screen bg-cover bg-center bg-fixed bg-no-repeat justify-center items-center' style={{ backgroundImage: 'url(/images/sven-mieke-jO6vBWX9h9Y-unsplash.jpg)' }}>
      <div className='flex justify-center flex-col gap-6 p-10 bg-[#c7c7c72c] rounded-2xl backdrop-blur-sm items-center'>
        <SearchBar placeholder='Search for your Instructor ..' />
        <div className='flex justify-center flex-col gap-3'>
          {instructors.map((instructor, index) => (
            <InstructorFeedback key={index} name={instructor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowInstructorsFeedbacks;
