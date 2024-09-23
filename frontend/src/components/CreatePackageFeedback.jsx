import React, { useEffect, useState } from "react";
import { User } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { SetRate } from './SetRate';
import Axios from 'axios';

const CreatePackageFeedback = () => {
  const feedbackTypes = ['question', 'suggestion', 'complaint'];
  const packagesTypes = ['silver', 'gold', 'platinum'];

  const [pfID, setpfID] = useState(0);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [packageType, setPackageType] = useState('');
  const [reviewType, setReviewType] = useState('');
  const [feedbackNote, setFeedbackNote] = useState('');
  const [rate, setRate] = useState(0);

  const inputRating = (newRate) => {
    setRate(newRate + 1);
  };

  useEffect(() => {
    fetchMaxIdAndSetId();
  })

  const fetchMaxIdAndSetId = async () => {
    try {
      const response = await Axios.get('http://localhost:3001/api/get-package-feedbacks-maxid');
      const maxId = response.data?.maxId; 
      setpfID(maxId + 1);  // set next product id 
    } catch (error) {
      console.error('Axios Error (getMaxId): ', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Prepare the data to send to the API
    const feedbackData = {
      pfID: pfID,
      cusName: fullName,
      cusEmail: email,
      pName: packageType,
      pfType: reviewType,
      pfNote: feedbackNote,
      pfRate: rate,
      pfDate: Date()
    };

    console.log(feedbackData);
    try {
      const response = await Axios.post('http://localhost:3001/api/create-package-feedback', feedbackData);
      if (response.status === 200) {
        alert('Successfully added package feedback!');
        // Optionally reset form fields after submission
        setFullName('');
        setEmail('');
        setPackageType('');
        setReviewType('');
        setFeedbackNote('');
        setRate(0);
        fetchMaxIdAndSetId(); // Fetch the new max ID
      }
    } catch (error) {
      console.error('Error submitting feedback: ', error);
      alert('An error occurred while submitting feedback. Please try again.'); // Alert on error
    }
  };

  return (
    <div>
      <form className='flex flex-col gap-2 items-center w-[30vw]' onSubmit={handleSubmit}>
        <div className='w-full flex items-center relative'>
          <input
            className='w-full hover:shadow-md hover:shadow-zinc-900 hover:outline-none relative py-1 px-3 pr-10 rounded-lg focus:shadow-md focus:shadow-zinc-900 focus:outline-none transition-all duration-500'
            type="text"
            name="full_name"
            id="full_name"
            placeholder='Name . . .'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label className='absolute right-2 text-zinc-500' htmlFor="full_name">
            <User />
          </label>
        </div>

        <div className='w-full flex items-center relative'>
          <input
            className='w-full hover:shadow-md hover:shadow-zinc-900 hover:outline-none relative py-1 px-3 pr-10 rounded-lg focus:shadow-md focus:shadow-zinc-900 focus:outline-none transition-all duration-500'
            type="text"
            name="user_email"
            id="user_email"
            placeholder='Email . . .'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="user_email">
            <FontAwesomeIcon className='absolute right-2 top-[5px] text-[1.25em] text-zinc-500' icon={faAt} />
          </label>
        </div>

        <div className='w-full flex items-center relative'>
          <label className='flex-1 text-center' htmlFor="review_package">Package</label>
          <select
            className='flex-[2] hover:shadow-md hover:shadow-zinc-900 hover:outline-none outline-none border-none py-1 px-3 rounded-lg focus:shadow-md focus:shadow-zinc-900 focus:outline-none transition-all duration-500'
            name="review_package"
            id="review_package"
            value={packageType}
            onChange={(e) => setPackageType(e.target.value)}
          >
            <option value="">Select Package ..</option>
            {packagesTypes.map((content, index) => (
              <option key={index} className='capitalize' value={content}>{content}</option>
            ))}
          </select>
        </div>

        <div className='w-full flex justify-center items-center relative'>
          <select
            className='w-4/5 outline-none hover:shadow-md hover:shadow-zinc-900 hover:outline-none border-none py-1 px-3 rounded-lg focus:shadow-md focus:shadow-zinc-900 focus:outline-none transition-all duration-500'
            name="review_type"
            id="review_type"
            value={reviewType}
            onChange={(e) => setReviewType(e.target.value)}
          >
            <option value="">Choose Feedback Type ..</option>
            {feedbackTypes.map((content, index) => (
              <option key={index} className='capitalize' value={content}>{content}</option>
            ))}
          </select>
        </div>

        <div className='w-full flex items-center justify-center relative'>
          <SetRate rate={rate} handleRating={inputRating} />
        </div>

        <div className='w-full flex items-center relative'>
          <textarea
            className='w-full outline-none hover:shadow-md hover:shadow-zinc-900 hover:outline-none border-none py-1 px-3 rounded-lg focus:shadow-md focus:shadow-zinc-900 focus:outline-none transition-all duration-500'
            name="user_feedback"
            id="user_feedback"
            placeholder='Your Feedback...'
            value={feedbackNote}
            onChange={(e) => setFeedbackNote(e.target.value)}
          />
        </div>

        <div className='w-full pt-3 flex items-center justify-center gap-4 relative'>
          <button className='flex items-center justify-center py-2 uppercase font-semibold px-10 rounded-xl bg-yellow-500 hover:shadow-md hover:shadow-zinc-900 hover:outline-none transition-all duration-500' type="reset">
            Cancel
          </button>
          <button className='flex items-center justify-center py-2 uppercase font-semibold px-10 rounded-xl bg-yellow-500 hover:shadow-md hover:shadow-zinc-900 hover:outline-none transition-all duration-500' type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePackageFeedback;
